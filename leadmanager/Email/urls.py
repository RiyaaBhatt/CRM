from django.urls import path
from .views import SendEmailView,LeadEmailsView

urlpatterns = [
    path('send-email/', SendEmailView.as_view(), name='send-email'),
        path('emails/<str:recipient_email>/', LeadEmailsView.as_view(), name='lead-emails'),

]
