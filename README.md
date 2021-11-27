# PTS3 - Chatbot

> Louis Guillet - Arthur Aladenise - Mathieu Lucas - Nicolas Fidel - Mathieu Chambon - Alexis Le Guennec

## Liens:

- ### Miro :
  https://miro.com/app/board/o9J_ldWX4dY=/

- ### Jira :
  https://pts3.atlassian.net/jira/software/projects/PTS3/boards/1

- ### Drive PTS3  :
  https://drive.google.com/drive/folders/1V-SURYFJvSByarzSSqksPk6HOnvFoC3K?usp=sharing

  - **Lien du cahier des charges :** 
    https://drive.google.com/file/d/1C49cSCUHT_enyaclMj6LY14w7d4XEZNj/view?usp=sharing

  - **Lien du cahier du support de soutenances :** 
    https://docs.google.com/presentation/d/1kXmrjN9P9-b2NS84oisHjnJGfzHUTyH67FJSnvfzsCA/edit?usp=sharing

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
