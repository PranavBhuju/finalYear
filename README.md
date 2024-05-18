# Job Portal

Job Portal is a MERN Stack based web app which helps in streamlining the flow of job application process. It allows users to select there roles (applicant/recruiter), and create an account. In this web app, login session are persistent and REST APIs are securely protected by JWT token verification. After logging in, a recruiter can create/delete/update jobs, shortlist/accept/reject applications, view and parse applicant resume and edit profile. And, an applicant can view jobs, perform fuzzy search with various filters, apply for jobs with an SOP, view applications, upload profile picture, upload or build a resume and edit profile.

Directory structure of the web app is as follows:

```
- jobPortal
    - backend/
    - frontend/
- parser
- README.md
```

## Instructions for initializing web app:

- Install Node JS, MongoDB in the machine.
- Move inside parser directory: `cd parser`
- Install dependencies in parser directory: `npm install`
- Move inside backend directory in jobPortal: `cd ..\jobPortal\backend`
- Install dependencies in backend directory: `npm install`
- Start express server: `npm start`
- Backend server will start on port 4444.
- Now go inside frontend directory: `cd ..\frontend`
- Install dependencies in frontend directory: `npm install`
- Start web app's frontend server: `npm start`
- Frontend server will start on port 3000.
- 
- Now open `http://localhost:3000/` and proceed creating jobs and applications by signing up in required categories.

