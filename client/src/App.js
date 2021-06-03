import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import RecruiterFormPage from "./pages/recruiter/RecruiterFormPage";
import RecruiterSignUpPage from "./pages/recruiter/RecruiterSignUpPage";
import JobSeekerSignUpPage from "./pages/jobseeker/JobSeekerSignUpPage";
import GuestMainPage from "./pages/GuestMainPage";
import SignUpRolePage from "./pages/SignUpRolePage";
import JobDetailsPage from "./pages/recruiter/JobDetailsPage";
import UserMainPage from "./pages/UserMainPage";
import SignInRolePage from "./pages/SignInRolePage";
import JobSeekerSignInPage from "./pages/jobseeker/JobSeekerSignInPage";
import RecruiterSignInPage from "./pages/recruiter/RecruiterSignInPage";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/*sign up*/}
          <Route exact path="/signup">
            <SignUpRolePage />
          </Route>
          <Route exact path="/signup-jobseeker">
            <JobSeekerSignUpPage />
          </Route>
          <Route exact path="/signup-recruiter">
            <RecruiterSignUpPage />
          </Route>
          {/*sign up*/}

          {/*sign in*/}
          <Route exact path="/signin">
            <SignInRolePage />
          </Route>
          <Route exact path="/signin-jobseeker">
            <JobSeekerSignInPage />
          </Route>
          <Route exact path="/signin-recruiter">
            <RecruiterSignInPage />
          </Route>
          {/*sign in*/}

          <Route exact path="/form-recruiter">
            <RecruiterFormPage />
          </Route>
          <Route exact path="/job-details">
            <JobDetailsPage />
          </Route>
          <Route exact path="/userpage">
            <UserMainPage />
          </Route>
          <Route exact path="/">
            <GuestMainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}