import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RecruiterSignUpPage from "./pages/recruiter/RecruiterSignUpPage";
import RecruiterFormPage from "./pages/recruiter/RecruiterFormPage";
import JobSeekerSignUpPage from "./pages/jobseeker/JobSeekerSignUpPage";
import JobSeekerFormPage from "./pages/jobseeker/JobSeekerFormPage.jsx";
import JobDetail from "./pages/jobseeker/JobDetailsPage";
import MainPage from "./pages/MainPage";
import SignInRolePage from "./pages/SignInRolePage";
import SignUpRolePage from "./pages/SignUpRolePage";
import QuestionsPage from "./pages/recruiter/QuestionsPage";
import RecruiterDashboardPage from "./pages/recruiter/RecruiterDashboardPage";
import RecruiterSignInPage from "./pages/recruiter/RecruiterSignInPage";
import JobSeekerSignInPage from "./pages/jobseeker/JobSeekerSignInPage";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/signup">
            <SignUpRolePage />
          </Route>
          <Route exact path="/signup-recruiter">
            <RecruiterSignUpPage />
          </Route>
          <Route exact path="/signup-jobseeker">
            <JobSeekerSignUpPage />
          </Route>

          <Route exact path="/signin">
            <SignInRolePage />
          </Route>
          <Route exact path="/signin-recruiter">
            <RecruiterSignInPage />
          </Route>
          <Route exact path="/signin-jobseeker">
            <JobSeekerSignInPage />
          </Route>

          <Route exact path="/form-recruiter">
            <RecruiterFormPage />
          </Route>
          <Route exact path="/form-jobseeker">
            <JobSeekerFormPage />
          </Route>

          <Route exact path="/question">
            <QuestionsPage />
          </Route>
          <Route exact path="/recruiter-dashboard">
            <RecruiterDashboardPage />
          </Route>
          <Route exact path="/job-detail/:id">
            <JobDetail />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}