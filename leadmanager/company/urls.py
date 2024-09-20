# urls.py
from django.urls import path
from .views import create_company

urlpatterns = [
    path('company/', create_company, name='create_company'),
]
