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
- `GET /job-seeker-resume`

- `POST /job-seeker-resume`

- `PUT /job-seeker-resume`

  


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
        "email" : "aziz@mail.com"
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
