package configs

import "time"

type Token struct {
	PrivateKey                  string
	PublicKey                   string
	ExpireIn                    string
	RegenerateTokenBeforeExpiry string
}

func (t Token) GetExpiresInDuration() (time.Duration, error) {
	return time.ParseDuration(t.ExpireIn)
}

func (t Token) GetRegenerateTokenBeforeExpiryDuration() (time.Duration, error) {
	return time.ParseDuration(t.RegenerateTokenBeforeExpiry)
}
