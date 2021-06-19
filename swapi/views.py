from django.shortcuts import render
from rest_framework import viewsets

# Create your views here.

from .serializers import PeopleSerializer
from .models import People

class PeopleViewSet(viewsets.ModelViewSet):
    queryset = People.objects.all()
    serializer_class = PeopleSerializer
