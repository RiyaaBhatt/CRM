from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Email
from .Searilizers import EmailSerializer
class SendEmailView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = EmailSerializer(data=request.data)
        if serializer.is_valid():
            
            recipient = serializer.validated_data['recipient']
            subject = serializer.validated_data['subject']
            body = serializer.validated_data['body']

          
            # Save email information to the database
            email = serializer.save()
            return Response(EmailSerializer(email).data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LeadEmailsView(APIView):
    def get(self, request, recipient_email):
        emails = Email.objects.filter(recipient=recipient_email).order_by('sent_at')
        serializer = EmailSerializer(emails, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)