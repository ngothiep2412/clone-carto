//go:build wireinject
// +build wireinject

//
//go:generate go run github.com/google/wire/cmd/wire
package wiring

import (
	"clone-carto/internal/app"
	"clone-carto/internal/configs"
	"clone-carto/internal/dataaccess"
	"clone-carto/internal/handlers"
	"clone-carto/internal/handlers/logic"
	"clone-carto/internal/handlers/utils"

	"github.com/google/wire"
)

var WireSet = wire.NewSet(
	utils.WireSet,
	dataaccess.WireSet,
	logic.WireSet,
	handlers.WireSet,
	configs.WireSet,
	app.WireSet,
)

func InitializeCarto(filePath configs.ConfigFilePath) (app.Carto, func(), error) {
	wire.Build(WireSet)

	return nil, nil, nil
}
