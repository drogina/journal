from django.db import models
from django.utils import timezone


class Journal(models.Model):
    def __str__(self):
        return self.title

    title = models.CharField(max_length=60)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now())
    updated_date = models.DateTimeField(default=timezone.now())
