package handlers

import (
	"clone-carto/internal/handlers/http"

	"github.com/google/wire"
)

var WireSet = wire.NewSet(
	http.WireSet,
)
