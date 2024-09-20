# urls.py
from django.urls import path
from .views import create_company,get_companies,get_company_by_user


urlpatterns = [
        path('company/', create_company, name='create_company'),
        path('company/get', get_companies, name='company-list'),
            path('company/user/<int:user_id>/', get_company_by_user, name='company-by-user'),

]
