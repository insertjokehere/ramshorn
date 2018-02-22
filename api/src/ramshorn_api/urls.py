from django.contrib import admin
from django.urls import path, include
from rest_framework.permissions import AllowAny

from drf_yasg.views import get_schema_view
from drf_yasg import openapi


urlpatterns = [
    path('docs/', get_schema_view(
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
