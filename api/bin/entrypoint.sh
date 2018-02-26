#!/bin/bash -x

echo "Waiting for postgres..."
echo "\\q\n" | psql -h ${DB_HOST} -p ${DB_PORT} -U ${DB_USER}
while [ $? -ne 0 ]; do
    sleep 1
    echo "\\q\n" | psql -h ${DB_HOST} -p ${DB_PORT} -U ${DB_USER}
done

ramshorn_api migrate

ramshorn_api shell -c "from django.contrib.auth.models import User
if User.objects.count() == 0:
    User.objects.create_superuser('admin', 'admin@example.com', 'admin')
"

if [ ! -d /tmp/static ]; then
    mkdir /tmp/static
fi

ramshorn_api collectstatic --noinput

ramshorn_api runserver 0.0.0.0:8000
