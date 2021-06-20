from django.db.models import fields
from rest_framework import serializers

from .models import People

class PeopleSerializer(serializers.ModelSerializer):
    homeworld = serializers.StringRelatedField(many = False)
    vehicles = serializers.StringRelatedField(many = True)
    species = serializers.StringRelatedField(many = True)

    class Meta:
        model = People
        fields = [
            'id',
            'name',
            'eye_color',
            'hair_color',
            'skin_color',
            'birth_year',
            'homeworld',
            'vehicles',
            'species'
        ]


