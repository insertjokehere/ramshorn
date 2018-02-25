# Generated by Django 2.0.2 on 2018-02-25 02:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='FaunaType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('genus', models.TextField()),
                ('species', models.TextField()),
                ('variant', models.TextField(blank=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='FloraType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('genus', models.TextField()),
                ('species', models.TextField()),
                ('variant', models.TextField(blank=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Individual',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Tank',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=150)),
                ('description', models.TextField()),
                ('width', models.DecimalField(decimal_places=1, help_text='Width, in cm', max_digits=13)),
                ('depth', models.DecimalField(decimal_places=1, help_text='Depth, in cm', max_digits=13)),
                ('length', models.DecimalField(decimal_places=1, help_text='Length, in cm', max_digits=13)),
                ('volume_override', models.DecimalField(decimal_places=1, help_text='Overridden volume, in L', max_digits=13, null=True)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='individual',
            name='present_in',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fauna', to='tim.Tank'),
        ),
        migrations.AddField(
            model_name='individual',
            name='species',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='tim.FaunaType'),
        ),
        migrations.AddField(
            model_name='floratype',
            name='present_in',
            field=models.ManyToManyField(related_name='flora', to='tim.Tank'),
        ),
    ]