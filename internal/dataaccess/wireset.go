package dataaccess

import (
	"clone-carto/internal/dataaccess/db"

	"github.com/google/wire"
)

var WireSet = wire.NewSet(
	db.WireSet,
)
