package main

import (
	"clone-carto/internal/configs"
	"clone-carto/internal/wiring"
	"log"
	"os"
)

func main() {
	configFilePath := ""
	if len(os.Args) == 2 {
		configFilePath = os.Args[1]
	}

	carto, cleanup, err := wiring.InitializeCarto(configs.ConfigFilePath(configFilePath))
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
