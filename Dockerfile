# Usa una imagen base de Node.js
FROM node:16

# Actualizar los paquetes e instalar netcat para el script de espera
RUN apt-get update && apt-get install -y netcat

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de la aplicación
COPY package*.json ./
RUN npm install

# Copiar el script de espera al contenedor
COPY wait-for-mysql.sh /wait-for-mysql.sh
RUN chmod +x /wait-for-mysql.sh

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto de la aplicación
EXPOSE 5001

# Ejecutar el script wait-for-mysql.sh, luego el script seedUsers.js y finalmente el servidor
CMD sh -c "/wait-for-mysql.sh && node seedUsers.js && npm start"

