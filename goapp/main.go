package main

import (
	"encoding/json"
	"flag"
	"net/http"
)

var addr = flag.String("addr", ":8000", "server addr")

func ping(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")

	json.NewEncoder(w).Encode(map[string]interface{}{
		"message": "pong",
	})
}

func main() {
	http.HandleFunc("/", ping)
	http.ListenAndServe(*addr, nil)
}
