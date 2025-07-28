package logic

import (
	"clone-carto/internal/dataaccess/db"
	"clone-carto/internal/handlers/http/rpc"
	"context"

	"go.uber.org/zap"
)

type Submission interface {
	CreateSubmission(ctx context.Context, in *rpc.CreateSubmissionRequest) (*rpc.CreateSubmissionResponse, error)
	GetSubmissionSnippetList(ctx context.Context, in *rpc.GetSubmissionSnippetListRequest) (*rpc.GetSubmissionSnippetListResponse, error)
	GetSubmission(ctx context.Context, in *rpc.GetSubmissionRequest) (*rpc.GetSubmissionResponse, error)
	DeleteSubmission(ctx context.Context, in *rpc.DeleteSubmissionRequest) (*rpc.DeleteSubmissionResponse, error)
	GetAccountSubmissionSnippetList(ctx context.Context, in *rpc.GetAccountSubmissionSnippetListRequest) (*rpc.GetAccountSubmissionSnippetListResponse, error)
	GetProblemSubmissionSnippetList(ctx context.Context, in *rpc.GetProblemSubmissionSnippetListRequest) (*rpc.GetProblemSubmissionSnippetListResponse, error)
}

type submission struct {
	submissionDataAccessor db.SubmissionDataAccessor
	logger                 *zap.Logger
}

func NewSubmission(
	submissionDataAccessor db.SubmissionDataAccessor,
	logger *zap.Logger,
) Submission {
	return &submission{
		submissionDataAccessor: submissionDataAccessor,
		logger:                 logger,
	}
}

func (s submission) CreateSubmission(ctx context.Context, in *rpc.CreateSubmissionRequest) (*rpc.CreateSubmissionResponse, error) {
	panic("unimplemented")
}

func (s submission) DeleteSubmission(ctx context.Context, in *rpc.DeleteSubmissionRequest) (*rpc.DeleteSubmissionResponse, error) {
	panic("unimplemented")
}

func (s submission) GetAccountSubmissionSnippetList(ctx context.Context, in *rpc.GetAccountSubmissionSnippetListRequest) (*rpc.GetAccountSubmissionSnippetListResponse, error) {
	panic("unimplemented")
}

func (s submission) GetProblemSubmissionSnippetList(ctx context.Context, in *rpc.GetProblemSubmissionSnippetListRequest) (*rpc.GetProblemSubmissionSnippetListResponse, error) {
	panic("unimplemented")
}

func (s submission) GetSubmission(ctx context.Context, in *rpc.GetSubmissionRequest) (*rpc.GetSubmissionResponse, error) {
	panic("unimplemented")
}

func (s submission) GetSubmissionSnippetList(ctx context.Context, in *rpc.GetSubmissionSnippetListRequest) (*rpc.GetSubmissionSnippetListResponse, error) {
	panic("unimplemented")
}
