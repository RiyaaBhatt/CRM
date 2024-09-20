# serializers.py
from rest_framework import serializers
from accounts.serializers import UserSerializer
from .models import Company

class CompanySerializer(serializers.ModelSerializer):
    user=UserSerializer(read_only=True)

    class Meta:
        model = Company
        fields = '__all__'
