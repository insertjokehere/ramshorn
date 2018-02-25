from django.urls import path
from . import views


urlpatterns = [
    path('tank/', views.TankListCreate.as_view()),
    path('tank/<tank_id>/', views.TankUpdate.as_view()),
    path('flora/search/', views.FloraSearch.as_view())
]
