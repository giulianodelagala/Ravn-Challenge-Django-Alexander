from django.db import models

# Create your models here.

class Planets(models.Model):
    name = models.CharField(max_length=60)

    def __str__(self):
        return self.name

class Vehicles(models.Model):
    name = models.CharField(max_length=60)

    def __str__(self):
        return self.name

class Species(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class People(models.Model):
    name = models.CharField(max_length=60)
    #heigth = models.IntegerField(min=0)
    eye_color = models.CharField(max_length=20)
    hair_color = models.CharField(max_length=20)
    skin_color = models.CharField(max_length=20)
    birth_year = models.CharField(max_length=12)
    homeworld = models.ForeignKey(Planets, on_delete=models.CASCADE)
    vehicles = models.ManyToManyField(Vehicles)
    species = models.ManyToManyField(Species)

    def __str__(self):
        return self.name




