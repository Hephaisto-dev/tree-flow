FROM node:14.10.0-buster-slim as build

WORKDIR /app

COPY . /app

EXPOSE 3000

CMD /bin/bash -c 'npm install --no-cache; npm start'
#CMD npm start

# production environment
#FROM nginx:1.16.0-alpine
#COPY --from=build /app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
