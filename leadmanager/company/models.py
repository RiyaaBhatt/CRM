# models.py
from django.db import models
from django.contrib.auth.models import User


class Company(models.Model):
    name = models.CharField(max_length=255)
    size = models.CharField(max_length=50)
    details = models.TextField()
    website = models.URLField(blank=True, null=True)
    phone_number = models.CharField(max_length=20)
    address = models.CharField(max_length=255)
    user=models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.name
