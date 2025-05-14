package api

type PersonRequestDto struct {
	FirstName string `json:"first_name" binding:"required"`
	LastName  string `json:"last_name" binding:"required"`
	ImageURL  string `json:"image_url" binding:"required"`
}

type PersonResponseDto struct {
	ID           uint   `json:"id"`
	FullName     string `json:"full_name"`
	ImageURL     string `json:"image_url"`
	CauseOfDeath string `json:"cause_of_death,omitempty"`
	IsDead       bool   `json:"is_dead"`
	DeathTime    string `json:"death_time,omitempty"`
	CreatedAt    string `json:"created_at"`
}

type ErrorResponse struct {
	Status      int    `json:"status"`
	Description string `json:"description"`
	Message     string `json:"message"`
}
