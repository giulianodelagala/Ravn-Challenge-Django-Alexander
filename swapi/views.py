from django.shortcuts import render
from rest_framework import viewsets, pagination, generics

# Create your views here.

from .serializers import PeopleSerializer
from .models import People

#pagination for infinite scrolling
class PeoplePagination(pagination.PageNumberPagination):
    page_size = 4

class PeopleViewSet(viewsets.ModelViewSet):
    queryset = People.objects.all()
    serializer_class = PeopleSerializer
    pagination_class = PeoplePagination
