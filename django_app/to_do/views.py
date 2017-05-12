from django.shortcuts import render
import django_filters
from rest_framework import viewsets, filters
from rest_framework.decorators import api_view

from .models import Todo
from .serializer import TodoSerializer

from rest_framework import permissions

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all().order_by('-created_at')
    serializer_class = TodoSerializer

    # フィルタの追加
    filter_fields = ('publishing',)
    # 認証設定
    # CURD全てに認証掛けたい場合は (permissions.IsAuthenticated,)
    # Read Onlyの場合は (permissions.IsAuthenticatedOrReadOnly,)
    permission_classes = (permissions.IsAuthenticatedOrReadOnly)
