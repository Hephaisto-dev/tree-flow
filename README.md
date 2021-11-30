# Hackathon GottaGoHack - Winter 2021

> Nicolas Fidel - Hephaisto - Mayeul Kergall - Edouard Frc

## Liens:

- ### GottaGoHack :
  https://www.gottagohack.fr/

## Architecture du projet

Tous le projet est dans un conteneur Docker.  
Dans le docker-compose il y a 4 conteneurs :  
* Application Stencil JS (port: 3333)  
* Api en python (port: 5000)  
* Base de données (port: 3307)  
* PhpMyAdmin (port: 2000)  

Le projet a deux dossier:  
* client : application web stencil js
* serveur : api flask

## Lancer le projet

Pour lancer le projet : 
```bash
docker-compose up --build -d
```

Pour acceder au conteneur du client : 
```bash
docker-compose exec client bash
```

Pour acceder au conteneur du serveur : 
```bash
docker-compose exec server bash
```
