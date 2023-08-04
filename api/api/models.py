from django.db import models

# Create your models here.

class School(models.Model):
    firstname = models.CharField(null=True, blank=True, max_length=200)
    lastname = models.CharField(null=True, blank=True, max_length=200)
    username = models.CharField(max_length=200)
    email = models.EmailField(null=True, blank=True, max_length=200)
    password = models.CharField(max_length=200, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.username, self.email, self.password
