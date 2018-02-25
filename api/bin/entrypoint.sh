#!/bin/bash -x

ramshorn_api migrate

ramshorn_api shell -c "from django.contrib.auth.models import User
if User.objects.count() == 0:
    User.objects.create_superuser('admin', 'admin@example.com', 'admin')
"

ramshorn_api runserver 0.0.0.0:8000
