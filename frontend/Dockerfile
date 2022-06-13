FROM node:16-alpine
RUN apk update && apk add --no-cache make git

WORKDIR /frontend

RUN npm install -g @angular/cli

COPY . /frontend
RUN npm install

RUN chown -R node /frontend

USER node
