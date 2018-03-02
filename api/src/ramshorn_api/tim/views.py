from django.shortcuts import get_object_or_404

from rest_framework import generics
from rest_framework.pagination import LimitOffsetPagination

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


class FloraSearch(generics.ListAPIView):

    serializer_class = serializers.FloraTypeSerializer
    pagination_class = LimitOffsetPagination

    def get_queryset(self):
        qs = models.FloraType.objects.all()
        for filter_field in ['genus', 'species', 'variant']:
            filter_value = self.request.query_params.get(filter_field, None)
            if filter_value is not None and len(filter_value) > 2:
                qs = qs.filter(**{filter_field + "__startswith": filter_value})

        return qs
