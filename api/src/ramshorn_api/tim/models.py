from django.db import models
from django.contrib.auth.models import User


class Tank(models.Model):

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=150, blank=True)
    description = models.TextField()
    width = models.DecimalField(max_digits=13, decimal_places=1, help_text="Width, in cm")
    depth = models.DecimalField(max_digits=13, decimal_places=1, help_text="Depth, in cm")
    length = models.DecimalField(max_digits=13, decimal_places=1, help_text="Length, in cm")
    volume_override = models.DecimalField(max_digits=13, decimal_places=1, help_text="Overridden volume, in L", null=True)
    
    @property
    def volume(self):
        if self.volume_override is not None:
            return self.volume_override
        else:
            return self.width * self.length * self.depth

    @volume.setter
    def volume(self, value):
        self.volume_override = volume
