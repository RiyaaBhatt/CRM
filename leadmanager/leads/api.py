from leads.models import Lead
from rest_framework import viewsets,permissions
from .serializers import LeadSerializer
from rest_framework.decorators import action

#lead viewsets  
class LeadViewset(viewsets.ModelViewSet):
    
    permission_classes=[
        permissions.IsAuthenticated
    ]
    def get_queryset(self):
        return self.request.user.leads.all()

    serializer_class=LeadSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
   