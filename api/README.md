# API EXCHO JOB

```
https://excho-job.herokuapp.com/
```

Excho job is a web job portal that provides job vacancies for job seekers equipped with interview questions in terms of applying for a job.

&nbsp;

# List of Available Endpoints



## Role Job Seeker
### Job Seeker
- `GET /users/job-seeker`

- `POST /users/job-seeker/register`

- `POST /users/job-seeker/login`

- `GET /users/job-seeker/:id`

- `PUT /users/job-seeker/:id`

- `DELETE /users/job-seeker/:id`

  

### Job Seeker Details
- `GET /job-seeker-details`

- `POST /job-seeker-details`

- `PUT /job-seeker-details`

  
### Job Seeker Profil
- `GET /job-seeker-profile`

- `POST /job-seeker-profile`

- `PUT /job-seeker-profile`

  


### Job Seeker Resume
- `GET /job-seeker-resume`

- `POST /job-seeker-resume`

- `PUT /job-seeker-resume`

  
## Role Hire
### Hire
- `GET /users/hire`

- `POST /users/hire/register`

- `POST /users/hire/login`

- `GET /users/hire/:hire-id`

- `PUT /users/hire/:hire-id`

- `DELETE /users/hire/:hire-id`

  

### Jobs
- `GET /jobs`
- `GET /jobs/:job-location`
- `GET /jobs/:job-type`
- `GET /jobs/:job-category`
- `GET /jobs/:id`
- `POST /jobs/add`
- `PUT /jobs/edit/:id`
- `DELETE/jobs/delete/:id`


## RESTful Endpoints Job Seeker
### GET /users/job-seeker

> Get All users job seeker

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success get all users job seeker",
      "code" : 200,
      "status" : "success"
  }, 
  "data" : [
      {
          "id" : 1,
          "full_name" : "Muhammad Fauzul Hanif",
          "email" : "hanif@mail.com"
      }, {
          "id" : 2,
          "full_name" : "Helmi Yusuf Efendi",
          "email" : "helmi@mail.com"
      }
      , {
          "id" : 3,
          "full_name" : "Muhamad Aziz",
          "email" : "muhamadaziz@mail.com"
      }
  ]
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### POST /users/:job-seeker/register

> Create new user job seeker 

_Request Header_
```
not needed
```

_Request Body_
```json
{
  "full_name" : "<full name to get insert into>",
  "email": "<email to get insert into>",
  "password": "<password to get insert into>"
}
```

_Response (201)_
```json
{
  "meta" : {
      "message" : "success create new user job seeker",
      "code" : 201,
      "status" : "success"
  }, 
  "data" : 
      {
        "id" : <given id by system>,
        "full_name" : "<posted full name>",
        "email" : "<posted email>"
      }
}
```

_Response (400 - Bad Request)_
```json
{
  "meta" : {
      "message" : "input data required",
      "code" : 400,
      "status" : "bad request"
  }, 
  "data" : 
      {
        "errors" : []
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal Server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```
---

### POST /users/job-seeker/login

> Compare data login on database with data inputed

_Request Header_
```
not needed
```

_Request Body_
```json
{
  "email": "<email to get compare>",
  "password": "<password to get compare>"
}
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success login user job seeker",
      "code" : 200,
      "status" : "success"
  }, 
  "data" : 
      {
        "token" : "<your access token>"
      }
}
```

_Response (400 - Bad Request)_
```json
{
  "meta" : {
      "message" : "input data required",
      "code" : 400,
      "status" : "bad request"
  }, 
  "data" : 
      {
        "errors" : []
      }
}
```

_Response (401 - Unauthorized)_
```json
{
    "meta" : {
      "message" : "input data error",
      "code" : 401,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal Server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```
---

### GET /users/job-seeker/:id

> Get user job seeker by  ID

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success get user job seeker by ID",
      "code" : 200,
      "status" : "success"
  }, 
  "data" :
      {
        "id" : 3,
        "full_name" : "Muhamad Aziz",
        "email" : "aziz@mail.com",
        "job_seeker_profile": {
            "id": 1,
            "image_job_seeker": "https://<add-link>.herokuapp.com/images/google.com.jpg",
            "job_seeker_id": 3
        },
        "job_seeker_resume": {
            "id": 1,
            "resume_job_seeker": "https://<add-link>.herokuapp.com/resume/resume-name.pdf",
            "job_seeker_id": 3
        },
        "job_seeker_detail": {
            "id": 1,
            "no_handphone": 6283213231232,
            "gender": "male",
            "address": "Jakarta",
            "experience": "2 years at google",
            "education": "ImpatByte University",
            "skills": "golang"
            "job_seeker_id": 3,
        }
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### PUT /users/job-seeker/:id

> Update user job seeker by ID

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```json
{
    "full_name" : "ironman",
    "email" : "ironman@mail.com"
}
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success update user job seeker by ID",
      "code" : 200,
      "status" : "success"
  }, 
  "data" :
      {
        "id" : 3,
        "full_name" : "ironman",
        "email" : "ironman@mail.com"
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### DELETE /users/job-seeker/:id

> Delete user job seeker by ID

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success delete user job seeker by ID",
      "code" : 200,
      "status" : "success"
  }, 
  "data" : "",
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

## RESTful endpoints Job Seeker Details
### GET /job-seeker-details

> Get All job seeker details

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success get all job seeker details",
      "code" : 200,
      "status" : "status OK"
  }, 
  "data" : [
      {
        "id" : 1,
        "no_handphone": 6283213231232,
        "gender": "male",
        "address": "Jakarta",
        "experience": "2 years at google",
        "education": "ImpatByte University",
        "skills": "golang"
      },  
      {
        "id" : 2,
        "no_handphone": 628345454545,
        "gender": "female",
        "address": "Bandung",
        "experience": "2 years at Facebook",
        "education": "Skilvul University",
        "skills": "Dating"
      }
  ]
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### POST /job-seeker-details

> Create new job seeker details

_Request Header_
```
not needed
```

_Request Body_
```json
{
  "no.handphone" : "<int number phone to get insert into>",
  "gender" : "<string gender to get insert into>",
  "address" : "<string address to get insert into>",
  "experience": "<string experience to get insert into>",
  "education": "<string education to get insert into>",
  "skills" : "<string skills to get insert into>"
}
```

_Response (201)_
```json
{
  "meta" : {
      "message" : "success create new Job Seeker Details",
      "code" : 201,
      "status" : "status Created"
  }, 
  "data" : 
      {
        "id" : 1,
        "no.handphone" : 085885858858,
        "gender" : "male",
        "address" : "Jakarta",
        "experience" : "2 Years in google",
        "education" : "Skilvul University",
        "skills" : "Golang",
        "job_seeker_id": 2,
      }
}
```

_Response (400 - Bad Request)_
```json
{
  "meta" : {
      "message" : "input data required",
      "code" : 400,
      "status" : "bad request"
  }, 
  "data" : 
      {
        "errors" : []
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal Server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```
---

### PUT /job-seeker-details

> Update user job seeker

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```json
{
  "no.handphone" : 085863000483,
  "gender" : "female",
  "address" : "Yogyakarta",
  "experience": "2 years in Tokopedia",
  "education": "Impactbyte University",
  "skills" : "React JS"
}
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success update job seeker details",
      "code" : 200,
      "status" : "success"
  }, 
  "data" :
      {
        "id" : 1,
        "no.handphone" : 085863000483,
  		"gender" : "female",
  		"address" : "Yogyakarta",
  		"experience": "2 years in Tokopedia",
  		"education": "Impactbyte University",
  		"skills" : "React JS"
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

## RESTful Endpoints Job Seekers Profile
- `GET /job-seeker-profile` 
- `POST /job-seeker-profile`
- `PUT /job-seeker-profile`

### GET /job-seeker-profile
> get user job seeker profile by job seeker id login 

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success get user job seeker profile by user job seeker ID",
      "code" : 200,
      "status" : "success"
  }, 
  "data" : {
        "id": 1,
        "image_job_seeker" : "https://<add-link>.herokuapp.com/images/profile-7-google.com.jpg",
        "job_seeker_id" : 2 
    }
}
```

_Response (401 - Unauthorized)_
```json
{
    "meta" : {
      "message" : "Unauthorize",
      "code" : 401,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### POST /job-seeker-profile
> update user job profile by job seeker id login

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
file upload (google.com.jpg)
```

_Response (201)_
```json
{
  "meta" : {
      "message" : "success create new user job seeker profile by ID",
      "code" : 201,
      "status" : "success"
  }, 
  "data" : {
        "id": 1,
        "image_job_user" : "https://<add-link>.herokuapp.com/images/profile-7-google.com.jpg",
        "job_seeker_id" : 2 
    }
}
```

_Response (400 - Bad Request)_
```json
{
  "meta" : {
      "message" : "input data required",
      "code" : 400,
      "status" : "bad request"
  }, 
  "data" : {
      "error" : ""
  }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### PUT /job-seeker-profile
> update user job seeker profile by job seeker id login

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```json
Upload new image file in postman form data
```


_Response (201)_
```json
{
  "meta" : {
      "message" : "success update user job seeker profile image",
      "code" : 200,
      "status" : "success update"
  }, 
  "data" : {
        "id": 1,
        "image_job_seeker": "https://<add-link>.herokuapp.com/images/profile-7-google.com.jpg,
        "job_seeker_id": 2,
    }
}
```

_Response (400 - Bad Request)_
```json
{
  "meta" : {
      "message" : "input data required",
      "code" : 400,
      "status" : "bad request"
  }, 
  "data" : {
      "errors" : []
  }
}
```

_Response (401 - Unauthorized)_
```json
{
    "meta" : {
      "message" : "Unauthorize",
      "code" : 401,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---
---

## RESTful Endpoints Job Seekers Resume
- `GET /job-seeker-resume` 
- `POST /job-seeker-resume`
- `PUT /job-seeker-resume`

### GET /job-seeker-resume
> get user job seeker resume by job seeker id login 

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success get user job seeker resume by user job seeker ID",
      "code" : 200,
      "status" : "success"
  }, 
  "data" : {
        "id": 1,
        "resume_job_seeker" : "https://<add-link>.herokuapp.com/resume/resume-name.pdf",
        "job_seeker_id" : 2 
    }
}
```

_Response (401 - Unauthorized)_
```json
{
    "meta" : {
      "message" : "Unauthorize",
      "code" : 401,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### POST /job-seeker-resume
> update user job resume by job seeker id login

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
file upload (resume-document-name.pdf)
```

_Response (201)_
```json
{
  "meta" : {
      "message" : "success create new user job seeker resume by ID",
      "code" : 201,
      "status" : "success"
  }, 
  "data" : {
        "id": 1,
        "image_job_user" : "https://<add-link>.herokuapp.com/resume/resume-name.pdf",
        "job_seeker_id" : 2 
    }
}
```

_Response (400 - Bad Request)_
```json
{
  "meta" : {
      "message" : "input data required",
      "code" : 400,
      "status" : "bad request"
  }, 
  "data" : {
      "error" : ""
  }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### PUT /job-seeker-resume
> update user job seeker resume by job seeker id login

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```json
Upload new docs or pdf file in postman form data
```


_Response (201)_
```json
{
  "meta" : {
      "message" : "success update user job seeker resume",
      "code" : 200,
      "status" : "success update"
  }, 
  "data" : {
        "id": 1,
        "resume_job_seeker": "https://<add-link>.herokuapp.com/resume/resume-name.pdf",
        "job_seeker_id": 2,
    }
}
```

_Response (400 - Bad Request)_
```json
{
  "meta" : {
      "message" : "input data required",
      "code" : 400,
      "status" : "bad request"
  }, 
  "data" : {
      "errors" : []
  }
}
```

_Response (401 - Unauthorized)_
```json
{
    "meta" : {
      "message" : "Unauthorize",
      "code" : 401,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---
## RESTful Endpoints Hire
### GET /users/hire

> Get All users hire

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success get all users hire",
      "code" : 200,
      "status" : "success"
  }, 
  "data" : [
      {
          "id" : 1,
          "full_name" : "HRD Muhammad Fauzul Hanif",
          "email" : "hrdhanif@mail.com"
          "pekerjaan" : "HRD Amazon Inc"
      }, {
          "id" : 2,
          "full_name" : "HRD Helmi Yusuf Efendi",
          "email" : "hrdhelmi@mail.com",
          "pekerjaan" : "HRD Microsoft Inc"
      }
      , {
          "id" : 3,
          "full_name" : "HRD Muhamad Aziz",
          "email" : "hrdaziz@mail.com",
          "pekerjaan" : "HRD PT Google Indonesia"
      }
  ]
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### POST /users/hire/register

> Create new user hire

_Request Header_
```
not needed
```

_Request Body_
```json
{
  "full_name" : "<full name to get insert into>",
  "email" : "<email to get insert into>",
  "pekerjaan" : "<pekerjaan to get insert into>",
  "password" : "<password to get insert into>"
}
```

_Response (201)_
```json
{
  "meta" : {
      "message" : "success create new user hire",
      "code" : 201,
      "status" : "success"
  }, 
  "data" : 
      {
        "id" : <given id by system>,
        "full_name" : "<posted full name>",
        "email" : "<posted email>",
        "pekerjaan" : "<posted pekerjaan>"
      }
}
```

_Response (400 - Bad Request)_
```json
{
  "meta" : {
      "message" : "input data required",
      "code" : 400,
      "status" : "bad request"
  }, 
  "data" : 
      {
        "errors" : []
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal Server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```
---

### POST /users/hire/login

> Compare data login on database with data inputed

_Request Header_
```
not needed
```

_Request Body_
```json
{
  "email": "<email to get compare>",
  "password": "<password to get compare>"
}
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success login user hire",
      "code" : 200,
      "status" : "success"
  }, 
  "data" : 
      {
        "token" : "<your access token>"
      }
}
```

_Response (400 - Bad Request)_
```json
{
  "meta" : {
      "message" : "input data required",
      "code" : 400,
      "status" : "bad request"
  }, 
  "data" : 
      {
        "errors" : []
      }
}
```

_Response (401 - Unauthorized)_
```json
{
    "meta" : {
      "message" : "input data error",
      "code" : 401,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal Server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```
---

### GET /users/hire/:id

> Get user job seeker by  ID

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success get user hire by ID",
      "code" : 200,
      "status" : "success"
  }, 
  "data" :
      {
        "id" : 3,
        "full_name" : "HRD Muhamad Aziz",
        "email" : "hrdaziz@mail.com",
        "pekerjaan" : "HRD PT Google Indonesia"
        "jobs" : {
        		"id" : 1,
          		"company_name" : "PT Google Indonesia",
          		"address" : "jakarta",
          		"industry" : "Technology",
          		"job_title" : "Golang Developer",
          		"salary" : 10000000,
          		"type" : "Full Time",
          		"job_description" : "Design, develop and build scalable back-end infrastructure levering modern cloud platforms and technologies using Node.JS",
          		"requirements" : "Strong proficiency with Javascript and/or Typescript",
          		"skills" : "Golang",
          		"location" : "Jakarta",
          		"category" : "IT and Software",
          		"hire_id" : 3
        	},
    		{
    			"id" : 2,
          		"company_name" : "PT Google Indonesia",
          		"address" : "jakarta",
          		"industry" : "Technology",
          		"job_title" : "Frontend Developer",
          		"salary" : 20000000,
          		"type" : "Full Time",
         		"job_description" : "Design, develop and build scalable front-end 		infrastructure with react js",
          		"requirements" : "Strong proficiency with Javascript",
          		"skills" : "react",
          		"location" : "Jakarta",
          		"category" : "IT and Software",
    			"hire_id" : 3
			}
      }
}
```



_Response (500 - Internal Server Error)_

```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### PUT /users/hire/:id

> Update user hire by ID

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```json
{
    "full_name" : "HRD ironman",
    "email" : "hrdironman@mail.com"
    "pekerjaan" : "HRD Stark Inc"
}
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success update user hire by ID",
      "code" : 200,
      "status" : "success"
  }, 
  "data" :
      {
        "id" : 3,
        "full_name" : "HRD ironman",
    	"email" : "hrdironman@mail.com"
    	"pekerjaan" : "HRD Stark Inc"
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### DELETE /users/hire/:id

> Delete user hire by ID

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success delete user hire by ID",
      "code" : 200,
      "status" : "success"
  }, 
  "data" : "",
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---
---
## RESTful Endpoints Jobs
### GET /jobs

> Get All jobs

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success get all jobs",
      "code" : 200,
      "status" : "success"
  }, 
  "data" : [
      {
          "id" : 1,
          "company_name" : "PT Google Indonesia",
          "address" : "jakarta",
          "industry" : "Technology",
          "job_title" : "Golang Developer",
          "salary" : 10000000,
          "type" : "Full Time",
          "job_description" : "Design, develop and build scalable back-end infrastructure levering modern cloud platforms and technologies using Node.JS",
          "requirements : "Strong proficiency with Javascript and/or Typescript",
          "skills" : "Golang",
          "location" : "Jakarta",
          "category" : "IT and Software"
      }, {
           "id" : 2,
          "company_name" : "PT Google Indonesia",
          "address" : "jakarta",
          "industry" : "Technology",
          "job_title" : "Frontend Developer",
          "salary" : 20000000,
          "type" : "Full Time",
          "job_description" : "Design, develop and build scalable front-end infrastructure with react js",
          "requirements : "Strong proficiency with Javascript",
          "skills" : "react",
          "location" : "Jakarta",
          "category" : "IT and Software"
      }
  ]
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### POST /jobs/add

> Create new job

_Request Header_
```
not needed
```

_Request Body_
```json
{
 "company_name" : "<company name to get insert into>",
 "address" : "<address name to get insert into>",
 "industry" : "<industry name to get insert into>",
 "job_title" : "<job title to get insert into>",
 "salary" : <salary to get insert into>,
 "type" : "<type to get insert into>",
 "job_description" : "<job description to get insert into>",
 "requirements : "<requirements to get insert into>",
 "skills" : "<skills to get insert into>",
 "location" : "<location to get insert into>",
 "category" : "<category to get insert into>"
}
```

_Response (201)_
```json
{
  "meta" : {
      "message" : "success create new job",
      "code" : 201,
      "status" : "success"
  }, 
  "data" : 
      {
        "id" : <given id by system>,
        "company_name" : "<posted company name>",
 		"address" : "<posted address>",
 		"industry" : "<posted industry>",
 		"job_title" : "<posted job title>",
 		"salary" : <posted salary>,
 		"type" : "<posted type>",
 		"job_description" : "<posted job descrition>",
 		"requirements : "<posted requirements>",
 		"skills" : "<posted skills>",
 		"location" : "<posted location>",
 		"category" : "<posted category>"
      }
}
```

_Response (400 - Bad Request)_
```json
{
  "meta" : {
      "message" : "input data required",
      "code" : 400,
      "status" : "bad request"
  }, 
  "data" : 
      {
        "errors" : []
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal Server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```
---
---

### GET /jobs/:id
### GET /jobs/:job-location
### GET /jobs/:job-type
### GET /jobs/:job-category

> Get job by ID or Location or Type or Category

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success get job by ID",
      "code" : 200,
      "status" : "success"
  }, 
  "data" :
      {
        "id" : 2,
        "company_name" : "PT Google Indonesia",
        "address" : "jakarta",
        "industry" : "Technology",
        "job_title" : "Frontend Developer",
        "salary" : 20000000,
        "type" : "Full Time",
        "job_description" : "Design, develop and build scalable front-end infrastructure with react js",
        "requirements : "Strong proficiency with Javascript",
        "skills" : "react",
        "location" : "Jakarta",
        "category" : "IT and Software"
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---
---

### PUT /jobs/edit/:id

> Update jobs by ID

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```json
{
   "company_name" : "Microsoft Inc",
   "address" : "surabaya",
   "industry" : "Technology",
   "job_title" : "Backend Developer",
   "salary" : 30000000,
   "type" : "Full Time",
   "job_description" : "Design, develop and build scalable back-end infrastructure",
   "requirements : "Strong proficiency with golang",
   "skills" : "golang",
   "location" : "surabaya",
   "category" : "IT and Software"
}
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success update jobs by ID",
      "code" : 200,
      "status" : "success"
  }, 
  "data" :
      {
        "id" : 2,
        "company_name" : "Microsoft Inc",
   		"address" : "surabaya",
   		"industry" : "Technology",
   		"job_title" : "Backend Developer",
   		"salary" : 30000000,
   		"type" : "Full Time",
   		"job_description" : "Design, develop and build scalable back-end infrastructure",
   		"requirements : "Strong proficiency with golang",
   		"skills" : "golang",
   		"location" : "surabaya",
   		"category" : "IT and Software"
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### DELETE /jobs/delete/:id

> Delete job  by ID

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success delete job by ID",
      "code" : 200,
      "status" : "success"
  }, 
  "data" : "",
}
```


_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---
