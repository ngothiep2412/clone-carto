package http

import (
	"clone-carto/internal/handlers/http/middlewares"

	"github.com/google/wire"
)

var WireSet = wire.NewSet(
	middlewares.WireSet,
	NewAPIServerHandler,
	NewSPAHandler,
	NewServer,
)
