
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('frontend.urls')),
    path('',include('leads.urls')),
    path('',include('accounts.urls')),
    path('',include("Email.urls")),
    path('api/',include("company.urls")),
        path('api/', include('issue.urls')),

]
