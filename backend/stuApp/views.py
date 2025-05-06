from django.shortcuts import render
from .models import studentDb, teacherDb
from .serializers import studserializer, teacherserializer
from rest_framework import viewsets
# Create your views here.

class studViewset(viewsets.ModelViewSet):
    serializer_class = studserializer
    queryset = studentDb.objects.all()
    model = studentDb

class teachViewset(viewsets.ModelViewSet):
    serializer_class = teacherserializer
    queryset = teacherDb.objects.all()
    model = teacherDb
