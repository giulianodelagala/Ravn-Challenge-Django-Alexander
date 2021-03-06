# Generated by Django 3.2.4 on 2021-06-19 19:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Planets',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=60)),
            ],
        ),
        migrations.CreateModel(
            name='Species',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Vehicles',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=60)),
            ],
        ),
        migrations.CreateModel(
            name='People',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=60)),
                ('eye_color', models.CharField(max_length=20)),
                ('hair_color', models.CharField(max_length=20)),
                ('skin_color', models.CharField(max_length=20)),
                ('birth_year', models.CharField(max_length=12)),
                ('homeworld', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='swapi.planets')),
                ('species', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='swapi.species')),
                ('vehicles', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='swapi.vehicles')),
            ],
        ),
    ]
