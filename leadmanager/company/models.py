# models.py
from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=255)
    size = models.CharField(max_length=50)
    details = models.TextField()
    website = models.URLField(blank=True, null=True)
    phone_number = models.CharField(max_length=20)
    address = models.CharField(max_length=255)

    def __str__(self):
        return self.name
