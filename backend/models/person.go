package models

import (
	"backend-avanzada/api"
	"time"

	"gorm.io/gorm"
)

type Person struct {
	gorm.Model
	FirstName    string
	LastName     string
	FullName     string
	ImageURL     string
	CauseOfDeath string
	DeathDetails string
	RegisteredAt time.Time
	CauseAt      *time.Time
	DetailsAt    *time.Time
	DeathTime    *time.Time
	IsDead       bool
}

func (p *Person) ToPersonResponseDto() *api.PersonResponseDto {
	return &api.PersonResponseDto{
		ID:           uint(p.ID),
		FullName:     p.FullName,
		ImageURL:     p.ImageURL,
		CauseOfDeath: p.CauseOfDeath,
		DeathDetails: p.DeathDetails,
		IsDead:       p.IsDead,
		DeathTime:    formatTime(p.DeathTime),
		CreatedAt:    p.CreatedAt.Format(time.RFC3339),
	}
}

func formatTime(t *time.Time) string {
	if t == nil {
		return ""
	}
	return t.Format(time.RFC3339)
}
