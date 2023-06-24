from django.urls import path

from . import views

urlpatterns = [
    path('', views.geeks_view, name="greed_view"),
    # URL to open home page
    path("", views.home, name='home'),
]