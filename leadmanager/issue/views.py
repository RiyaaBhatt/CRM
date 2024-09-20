from django.shortcuts import render

# Create your views here.
# issues/views.py
from rest_framework import viewsets, permissions
from .models import Issue
from .Serializers import IssueSerializer
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

class IssueViewSet(viewsets.ModelViewSet):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        """
        Optionally restrict the returned issues by filtering against
        a `username` query parameter in the URL.
        """
        queryset = super().get_queryset()
        username = self.request.query_params.get('username', None)
        if username is not None:
            queryset = queryset.filter(username__username=username)
        return queryset

    def perform_create(self, serializer):
        # This method is called when creating a new issue
        serializer.save(username=self.request.user)
    def perform_update(self, serializer):
        serializer.save()
    def get_queryset(self):
        queryset = super().get_queryset()
        username = self.request.query_params.get('username', None)
        if username is not None:
            queryset = queryset.filter(username__username=username)  # Assuming `username` is used for filtering
        return queryset
