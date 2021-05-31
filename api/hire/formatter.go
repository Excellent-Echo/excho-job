package hire

import "excho-job/entity"

type HireFormat struct {
	ID int `json:"id"`
	FullName string `json:"full_name"`
	Email string `json:"email"`
	Position string `json:"position"`
}

func FormatHire(hire entity.Hire) HireFormat{
	var formatHire = HireFormat{
		ID: hire.ID,
		FullName: hire.FullName,
		Email: hire.Email,
		Position: hire.Position,
	}
	return formatHire
}