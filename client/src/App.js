import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import RecruiterSignUpPage from "./pages/recruiter/RecruiterSignUpPage";
import RecruiterSignInPage from "./pages/recruiter/RecruiterSignInPage";
import RecruiterFormPage from "./pages/recruiter/RecruiterFormPage";
import JobSeekerSignUpPage from "./pages/jobseeker/JobSeekerSignUpPage";
import JobSeekerSignIn from "./pages/jobseeker/JobSeekerSignInPage";
import JobSeekerFormPage from "./pages/jobseeker/JobSeekerFormPage.jsx";
import JobDetail from "./pages/jobseeker/JobDetailsPage";
import MainPage from "./pages/MainPage";
import SignInRolePage from "./pages/SignInRolePage";
import SignUpRolePage from "./pages/SignUpRolePage";
import QuestionsPage from "./pages/QuestionsPage";
import DashPage from "./pages/recruiter/DashPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signup">
            <SignUpRolePage />
          </Route>
          <Route path="/signup-recruiter">
            <RecruiterSignUpPage />
          </Route>
          <Route path="/signup-jobseeker">
            <JobSeekerSignUpPage />
          </Route>

          <Route path="/signin">
            <SignInRolePage />
          </Route>
          <Route path="/signin-recruiter">
            <RecruiterSignInPage />
          </Route>
          <Route path="/signin-jobseeker">
            <JobSeekerSignIn />
          </Route>

          <Route path="/form-recruiter">
            <RecruiterFormPage />
          </Route>
          <Route path="/form-jobseeker">
            <JobSeekerFormPage />
          </Route>

          <Route path="/question">
            <QuestionsPage />
          </Route>
          <Route path="/dash">
            <DashPage />
          </Route>
          <Route path="/job-detail/:id">
            <JobDetail />
          </Route>

          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;