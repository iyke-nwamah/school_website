from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


def upload_path(instance, filename):
    return '/'.join(['covers', str(instance.username), filename])


class School(models.Model):
    firstname = models.CharField(null=True, blank=True, max_length=200)
    lastname = models.CharField(null=True, blank=True, max_length=200)
    username = models.CharField(max_length=200)
    email = models.EmailField(null=True, blank=True, max_length=200)
    password = models.CharField(max_length=200, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    cover = models.ImageField(blank=True, null=True, upload_to=upload_path)
    last_login = models.DateTimeField(auto_now=True)


class MyUserModel(models.Model):
    username = models.CharField(max_length=100)
    last_login = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username
