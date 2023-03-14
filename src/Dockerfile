FROM node:16-alpine

ENV APP_PORT=3000

RUN mkdir src

WORKDIR /src

RUN npm i nodemon -g

EXPOSE ${APP_PORT}

# vvvv this thing make me take a bath but not wet, eat but not done LMAO vvvv

# RUN nodemon seeder.js

# ^^^^ But finally i can make a seeder using docker feature in just after build/create using docker compose ^^^^

CMD nodemon app.js

