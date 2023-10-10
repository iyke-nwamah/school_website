from django.db import models

# Create your models here.


def upload_path(instance, filename):
    return '/'.join(['covers', str(instance.username), filename])


class School(models.Model):
    firstname = models.CharField(null=True, blank=True, max_length=200)
    lastname = models.CharField(null=True, blank=True, max_length=200)
    usernames = models.CharField(max_length=200)
    emails = models.EmailField(null=True, blank=True, max_length=200)
    passwords = models.CharField(max_length=200, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    cover = models.ImageField(blank=True, null=True, upload_to=upload_path)


class MyUserModel(models.Model):
    username = models.CharField(max_length=100)
    last_login = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username
