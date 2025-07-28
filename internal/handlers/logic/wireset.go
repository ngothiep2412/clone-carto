package logic

import "github.com/google/wire"

var WireSet = wire.NewSet(
	NewToken,
	NewRole,
	NewHash,
	NewAccount,
	NewProblem,
	NewTestCase,
	NewSubmission,
)
