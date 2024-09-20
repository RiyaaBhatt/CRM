# urls.py
from django.urls import path
from .views import create_company,get_companies

urlpatterns = [
        path('company/', create_company, name='create_company'),
        path('company/get', get_companies, name='company-list'),


]
