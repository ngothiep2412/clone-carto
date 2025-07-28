package logic

import (
	"clone-carto/internal/configs"
	"clone-carto/internal/handlers/utils"
	"context"

	"gitlab.com/pjrpc/pjrpc/v2"
	"go.uber.org/zap"
	"golang.org/x/crypto/bcrypt"
)

type Hash interface {
	Hash(ctx context.Context, data string) (string, error)
}

type hash struct {
	hashConfig configs.Hash
	logger     *zap.Logger
}

func NewHash(hashConfig configs.Hash, logger *zap.Logger) Hash {
	return &hash{
		hashConfig: hashConfig,
		logger:     logger,
	}
}

func (h hash) Hash(ctx context.Context, data string) (string, error) {
	logger := utils.LoggerWithContext(ctx, h.logger)

	hashed, err := bcrypt.GenerateFromPassword([]byte(data), h.hashConfig.Cost)
	if err != nil {
		logger.With(zap.Error(err)).Error("failed to generate hash")
		return "", pjrpc.JRPCErrInternalError()
	}

	return string(hashed), nil
}
