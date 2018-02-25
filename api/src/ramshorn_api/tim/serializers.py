from django.db import transaction
from rest_framework import serializers
from . import models


class ClassificationSerializer(serializers.Serializer):

    genus = serializers.CharField()
    species = serializers.CharField()
    variant = serializers.CharField(allow_blank=True)

    def create(self, validated_data):
        instance, _ = self.Meta.model.objects.get_or_create(
            **validated_data
        )
        return instance


class FloraTypeSerializer(ClassificationSerializer):

    class Meta:
        model = models.FloraType  # Note that these aren't true ModelSerializers


class FaunaTypeSerializer(ClassificationSerializer):

    class Meta:
        model = models.FaunaType


class IndividualSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Individual
        fields = ('id', 'species', )

    species = FaunaTypeSerializer()


class TankSummarySerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Tank
        fields = ('id', 'name', 'width', 'depth', 'length')

    def create(self, validated_data):
        return models.Tank.objects.create(
            owner=self.context['request'].user,
            **validated_data
        )


class TankSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Tank
        updatable_fields = (
            'id',
            'name',
            'description',
            'width',
            'depth',
            'length',
            'volume'
        )

        fields = updatable_fields + (
            'flora',
            'fauna'
        )

    volume = serializers.DecimalField(max_digits=13, decimal_places=1, allow_null=True)
    flora = FloraTypeSerializer(many=True)
    fauna = IndividualSerializer(many=True, read_only=True)

    def update(self, instance, validated_data):
        with transaction.atomic():
            for field in self.Meta.updatable_fields:
                if field in validated_data:
                    setattr(instance, field, validated_data[field])
            instance.save()

            instance.flora.clear()
            for flora_data in validated_data.get('flora', []):
                flora_serializer = FloraTypeSerializer(data=flora_data)
                assert flora_serializer.is_valid()
                flora_obj = flora_serializer.save()
                flora_obj.present_in.add(instance)

        return instance
