from django.shortcuts import get_object_or_404

from rest_framework import generics
from . import models, serializers


class TankListCreate(generics.ListCreateAPIView):

    serializer_class = serializers.TankSummarySerializer

    def get_queryset(self):
        return models.Tank.objects.filter(owner=self.request.user)


class TankUpdate(generics.RetrieveUpdateDestroyAPIView):

    serializer_class = serializers.TankSerializer

    def get_object(self):
        return get_object_or_404(
            models.Tank,
            id=self.kwargs['tank_id'],
            owner=self.request.user
        )
