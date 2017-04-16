from django.contrib import admin

# Register your models here.
from .models import Todo

@admin.register(Todo)
class Todo(admin.ModelAdmin):
    pass
