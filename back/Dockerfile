# Development
FROM node:16.14-alpine AS api_dev

LABEL maintainer="Vincent Letourneau <vincent@nanoninja.com>"

WORKDIR /home/node/api
VOLUME /home/node/api

ENV API_PORT=3000
ENV API_DB_DSN=mongodb://db:27017/store

EXPOSE $API_PORT

CMD ["npm", "start"]


# Production Builder
FROM node:16.14-alpine AS api_prod_builder

WORKDIR /home/node/api

COPY src .
COPY public .
COPY tsconfig.json .
COPY package.json .

RUN npm install && npm run build


# Production final
FROM node:16.14-alpine AS api_prod

WORKDIR /home/node/api

COPY --from=api_prod_builder /home/node/api/build .
COPY --from=api_prod_builder /home/node/api/package.json .

RUN npm install --only=production

ENV API_PORT=3000
ENV API_DB_DSN=mongodb://db:27017/store

EXPOSE $API_PORT

CMD ["node", "index.js"]
