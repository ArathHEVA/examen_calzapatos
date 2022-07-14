# examen_calzapatos
 
# examen_calzapatos

INSTRUCCIONES PARA CORRER EL PROYECTO

-Para inciar la pagina:
1.-Correr el comando "npm install" en la raiz de la carpeta petsitter para instalar las dependencias.
2.-Correr el comando "npm start" para que muestre la pagina en modo desarrollo

-Para iniciar la API
1.-Correr el comando "npm install" en la raiz de la carpeta API mysql para instalar las dependencias.
2.-Correr el comando "npm start" para inicar el servidor y cree las db que va a utilizar.
3.-En la misma ruta correr el comando "npx sequelize-cli db:migrate" para crear las tablas y relaciones correspondientes en la db

Scripts para ambientar datos manuales:
-insert into petsitter.`state`(name) values ("SINALOA"),("SONORA");

-insert into petsitter.`city` (name,stateid) values ("MAZATLAN",1),("CULIACAN",1);
-insert into petsitter.`city` (name,stateid) values ("OBREGON",2), ("NAVOJOA",2);

-insert into petsitter.`petstype` (description) values ("PERRO"),("GATO");
