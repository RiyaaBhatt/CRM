# issues/serializers.py
from rest_framework import serializers
from .models import Issue

class IssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issue
        fields = ['id', 'issue_type', 'description', 'status', 'priority', 'username', 'created_at', 'updated_at']
