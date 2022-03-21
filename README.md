# Docker

## Running MySQL

```sh
docker run --name dbsql \
    --net skynet \
    -e MYSQL_ROOT_PASSWORD=root \
    -e MYSQL_DATABASE=dbcloud \
    -v sqlstore:/var/lib/mysql \
    -d mysql
```

## Running NextCloud

```sh
docker run -d \
    --net skynet \
    -v nextcloud:/var/www/html \
    -p 8000:80 \
    nextcloud
```

## Running PHPMyAdmin

```sh
docker run --name myadmin \
    --net skynet \
    -e PMA_ARBITRARY=1 \
    -p 8080:80 \
    -d phpmyadmin
```

## Removing all containers

```sh
docker rm -f $(docker ps -aq)
```
