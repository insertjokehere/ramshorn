from rest_framework import serializers
from . import models


class ClassificationSerializer(serializers.Serializer):

    genus = serializers.CharField()
    species = serializers.CharField()
    variant = serializers.CharField()


class FloraTypeSerializer(ClassificationSerializer):
    pass


class FaunaTypeSerializer(ClassificationSerializer):
    pass


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
        fields = (
            'id',
            'name',
            'description',
            'width',
            'depth',
            'length',
            'flora',
            'fauna',
            'volume'
        )

    flora = FloraTypeSerializer(many=True)
    fauna = IndividualSerializer(many=True)
