from rest_framework import serializers
from . import models


class TankSummarySerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Tank
        fields = ('name', )


class TankSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Tank
        fields = ('id', 'name', 'description', 'width', 'depth', 'length')
