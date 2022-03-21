FROM golang:1.18.0-alpine AS app_builder

WORKDIR /usr/src/app
COPY main.go .
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 \
    go build -o api main.go


# Image finale
FROM scratch

COPY --from=app_builder ./usr/src/app/api /app/api

EXPOSE 8000

# docker build --no-cache -t goapp .
ENTRYPOINT ["/app/api"]
