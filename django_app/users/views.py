from django.shortcuts import render
from rest_framework import viewsets, filters

from django.contrib.auth.models import User
from .serializer import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
