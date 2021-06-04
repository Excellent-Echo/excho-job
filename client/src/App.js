import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import GuestHeader from "./components/GuestHeader";

// pages
import RecruiterSignUp from "./pages/recruiter/RecruiterSignUp";
import RecruiterSignIn from "./pages/recruiter/RecruiterSignIn";
import RecruiterForm from "./pages/recruiter/RecruiterForm";
import JobSeekerSignUp from "./pages/jobseeker/JobSeekerSignUp";
import JobSeekerSignIn from "./pages/jobseeker/JobSeekerSignIn";
import JobSeekerForm from "./pages/jobseeker/JobSeekerForm.jsx";
import JobDetail from "./pages/jobseeker/JobDetails";
import GuestMainPage from "./pages/GuestMainPage";
import SignInRolePage from "./pages/SignInRolePage";

function App() {
  return (
    <Router>
      <div>
        <GuestHeader />
        <Switch>
          <Route path="/signup-recruiter">
            <RecruiterSignUp />
          </Route>
          <Route path="/signin-recruiter">
            <RecruiterSignIn />
          </Route>
          <Route path="/form-recruiter">
            <RecruiterForm />
          </Route>
          <Route path="/signup-jobseeker">
            <JobSeekerSignUp />
          </Route>
          <Route path="/signin-jobseeker">
            <JobSeekerSignIn />
          </Route>
          <Route path="/form-jobseeker">
            <JobSeekerForm />
          </Route>
          <Route path="/job-detail">
            <JobDetail />
          </Route>
          <Route path="/signin">
            <SignInRolePage />
          </Route>
          <Route path="/">
            <GuestMainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
