from django.db import models
from django.contrib.auth.models import User
from decimal import Decimal


class Tank(models.Model):

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=150, blank=True)
    description = models.TextField(blank=True)
    width = models.DecimalField(max_digits=13, decimal_places=1, help_text="Width, in cm")
    depth = models.DecimalField(max_digits=13, decimal_places=1, help_text="Depth, in cm")
    length = models.DecimalField(max_digits=13, decimal_places=1, help_text="Length, in cm")
    volume_override = models.DecimalField(max_digits=13, decimal_places=1, help_text="Overridden volume, in L", null=True)

    @property
    def volume(self):
        if self.volume_override is not None:
            return self.volume_override
        else:
            return round((self.width * self.length * self.depth) / Decimal('1000.0'), 1)

    @volume.setter
    def volume(self, value):
        self.volume_override = value


class Classification(models.Model):

    UNIQUE_TOGETHER = (
        ('genus', 'species', 'variant')
    )

    class Meta:
        abstract = True

    genus = models.TextField()
    species = models.TextField()
    variant = models.TextField(blank=True)

    def __str__(self):
        rep = "{} {}".format(self.genus, self.species)
        if self.variant != "":
            rep += ' "{}"'.format(self.variant)

        return rep


class FloraType(Classification):

    class Meta:
        unique_together = Classification.UNIQUE_TOGETHER

    present_in = models.ManyToManyField(Tank, related_name="flora")


class FaunaType(Classification):

    class Meta:
        unique_together = Classification.UNIQUE_TOGETHER


class Individual(models.Model):

    species = models.ForeignKey(FaunaType, on_delete=models.PROTECT)
    present_in = models.ForeignKey(Tank, related_name="fauna", on_delete=models.CASCADE)
