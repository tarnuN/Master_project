from django.urls import path
from . import views

urlpatterns = [
    path("profile/", views.create_profile),                   # POST
    path("profile/<str:username>/", views.get_profile),       # GET
    path("profile/<str:username>/update/", views.update_profile),  # PUT
]
