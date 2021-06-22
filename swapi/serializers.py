from django.db import models
from django.db.models import fields
from django.db.models.query_utils import select_related_descend
from rest_framework import serializers

from .models import People, Vehicles

class PeopleSerializer(serializers.ModelSerializer):
    homeworld = serializers.StringRelatedField(many = False)
    # vehicles = serializers.StringRelatedField(many = True)
    species = serializers.StringRelatedField(many = True)

    class Meta:
        model = People
        fields = [
            'id',
            'name',
            'homeworld',
            'species'
        ]

class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicles
        fields = ('id', 'name')

class PersonSerializer(serializers.ModelSerializer):
    # vehicles = serializers.StringRelatedField(many = True)
    vehicles = VehicleSerializer(many = True)

    class Meta:
        model = People
        fields = [
            'eye_color',
            'hair_color',
            'skin_color',
            'birth_year',
            'vehicles'
        ]