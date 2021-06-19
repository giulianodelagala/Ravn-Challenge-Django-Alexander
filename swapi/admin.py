from django.contrib import admin

# Register your models here.

from .models import People
from .models import Planets
from .models import Vehicles
from .models import Species

admin.site.register(People)
admin.site.register(Planets)
admin.site.register(Vehicles)
admin.site.register(Species)