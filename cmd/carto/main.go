package main

import (
	"clone-carto/internal/wiring"
	"log"
)

func main() {
	carto, cleanup, err := wiring.InitializeCarto("")
	if err != nil {
		log.Println(err)
		panic(err)
	}

	defer cleanup()

	if err := carto.Start(); err != nil {
		log.Println(err)
		panic(err)
	}
}
