# Front Web Builder

FROM node:16.14-alpine AS web_dev_builder
LABEL maintainer="Vincent Letourneau <vincent@nanoninja.com>"

WORKDIR /home/node/app

COPY package*.json .
RUN npm ci --only=production
RUN npm install -g @angular/cli
COPY . .
RUN npm run build

# Front Web

FROM nginx:alpine AS web_dev
LABEL maintainer="Vincent Letourneau <vincent@nanoninja.com>"

WORKDIR /usr/share/nginx/html

RUN rm -Rf ./*
COPY --from=web_dev_builder /home/node/app/dist/front .