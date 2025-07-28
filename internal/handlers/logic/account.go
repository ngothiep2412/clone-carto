package logic

import (
	"clone-carto/internal/dataaccess/db"
	"clone-carto/internal/handlers/http/rpc"
	"context"

	"go.uber.org/zap"
	"gorm.io/gorm"
)

type Account interface {
	CreateAccount(ctx context.Context, in *rpc.CreateAccountRequest) (*rpc.CreateAccountResponse, error)
	GetAccountList(ctx context.Context, in *rpc.GetAccountListRequest, token string) (*rpc.GetAccountListResponse, error)
	GetAccount(ctx context.Context, in *rpc.GetAccountRequest, token string) (*rpc.GetAccountResponse, error)
	UpdateAccount(ctx context.Context, in *rpc.UpdateAccountRequest, token string) (*rpc.UpdateAccountResponse, error)
	CreateSession(ctx context.Context, in *rpc.CreateSessionRequest) (*rpc.CreateSessionResponse, string, error)
	DeleteSession(ctx context.Context, token string) error
	IsAccountNameTaken(ctx context.Context, accountName string) (bool, error)
	WithDB(db *gorm.DB) Account
}

type account struct {
	hash                        Hash
	token                       Token
	role                        Role
	accountDataAccessor         db.AccountDataAccessor
	accountPasswordDataAccessor db.AccountPasswordDataAccessor
	db                          *gorm.DB
	logger                      *zap.Logger
}

func NewAccount(
	hash Hash,
	token Token,
	role Role,
	accountDataAccessor db.AccountDataAccessor,
	accountPasswordDataAccessor db.AccountPasswordDataAccessor,
	db *gorm.DB,
	logger *zap.Logger,
) Account {
	return &account{
		accountDataAccessor:         accountDataAccessor,
		logger:                      logger,
		hash:                        hash,
		token:                       token,
		role:                        role,
		accountPasswordDataAccessor: accountPasswordDataAccessor,
		db:                          db,
	}
}

func (a account) CreateAccount(ctx context.Context, in *rpc.CreateAccountRequest) (*rpc.CreateAccountResponse, error) {
	panic("unimplemented")
}

func (a account) CreateSession(ctx context.Context, in *rpc.CreateSessionRequest) (*rpc.CreateSessionResponse, string, error) {
	panic("unimplemented")
}

func (a account) DeleteSession(ctx context.Context, token string) error {
	panic("unimplemented")
}

func (a account) GetAccount(ctx context.Context, in *rpc.GetAccountRequest, token string) (*rpc.GetAccountResponse, error) {
	panic("unimplemented")
}

func (a account) GetAccountList(ctx context.Context, in *rpc.GetAccountListRequest, token string) (*rpc.GetAccountListResponse, error) {
	panic("unimplemented")
}

func (a account) UpdateAccount(ctx context.Context, in *rpc.UpdateAccountRequest, token string) (*rpc.UpdateAccountResponse, error) {
	panic("unimplemented")
}

func (a account) IsAccountNameTaken(ctx context.Context, accountName string) (bool, error) {
	account, err := a.accountDataAccessor.GetAccountByAccountName(ctx, accountName)
	if err != nil {
		return false, err
	}

	return account != nil, nil
}

func (a account) WithDB(db *gorm.DB) Account {
	panic("unimplemented")
}
