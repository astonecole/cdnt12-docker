# Book Store

```sh
docker run --name db -p 27017:27017 --net skynet -d mongo
```

## Building api dev image

```sh
docker build --target api_dev -t api_dev .
```

```sh
docker run --net skynet -v ${PWD}:/home/node/api -p 3000:3000 api_dev
```


## Building prod image

```sh
docker build --target api_prod -t api_prod --no-cache .
```

## Running prod server

```sh
docker run --name api_prod_server -p 3000:3000 --net skynet api_prod
```

## Building Angular Prod

```sh
docker build -t web_prod .
```

## Running Angular

```sh
docker run --name web_prod_server -p 8080:80 --net skynet web_prod
```
