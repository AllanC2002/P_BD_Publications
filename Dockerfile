FROM mongo:6

COPY ./init.js /docker-entrypoint-initdb.d/init-mongo.js

EXPOSE 27018