from django.db import models

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=140)
    complete = models.BooleanField
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
