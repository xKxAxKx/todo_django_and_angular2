from rest_framework import serializers
from django.contrib.auth.models import Group, User

from .models import Todo

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'created_at')
