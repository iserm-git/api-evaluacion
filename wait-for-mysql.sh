#!/bin/sh
# wait-for-mysql.sh

set -e
  
until nc -z -v -w30 $DB_HOST 3306
do
  echo "Esperando a que la base de datos MySQL esté disponible..."
  sleep 1
done
  
echo "La base de datos MySQL está disponible."
exec "$@"
