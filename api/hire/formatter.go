package hire

import "excho-job/entity"

type HireFormat struct {
	ID       int    `json:"id"`
	FullName string `json:"full_name"`
	Email    string `json:"email"`
	Position string `json:"position"`
}

type HireDetailFormat struct {
	HireFormat
	Jobs []entity.Job `json:"jobs"`
}

type DeleteFormat struct {
	Message string `json:"message"`
}

func FormatHire(hire entity.Hire) HireFormat {
	var formatHire = HireFormat{
		ID:       hire.ID,
		FullName: hire.FullName,
		Email:    hire.Email,
		Position: hire.Position,
	}
	return formatHire
}

func FormatDeleteUser(msg string) DeleteFormat {
	var deleteFormat = DeleteFormat{
		Message: msg,
	}
	return deleteFormat
}

func FormatDetailHire(hire entity.HireByIdOutput) HireDetailFormat {
	var formatHire = HireDetailFormat{}

	formatHire.ID = hire.ID
	formatHire.FullName = hire.FullName
	formatHire.Email = hire.Email
	formatHire.Position = hire.Position
	formatHire.Jobs = hire.Jobs

	return formatHire
}
