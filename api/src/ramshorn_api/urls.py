from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from rest_framework.permissions import AllowAny

from drf_yasg.views import get_schema_view
from drf_yasg import openapi


urlpatterns = [
    path('', get_schema_view(
        info=openapi.Info(
            title="Ramshorn API",
            default_version="v1"
        ),
        permission_classes=(AllowAny,),
        public=True
    ).with_ui()),
    path('admin/', admin.site.urls),
    path('', include('ramshorn_api.tim.urls'))
]

if settings.URL_PREFIX is not None:
    urlpatterns = [
        path(settings.URL_PREFIX, include(urlpatterns))
    ]
