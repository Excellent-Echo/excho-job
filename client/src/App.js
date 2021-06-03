import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import GuestHeader from "./components/GuestHeader";

// pages
import RecruiterFormPage from "./pages/recruiter/RecruiterForm";
import RecruiterSignUpPage from "./pages/recruiter/RecruiterSignUp";
import JobSeekerSignUpPage from "./pages/jobseeker/JobSeekerSignUp";
import SignInPage from "./pages/SignIn";
import GuestMainPage from "./pages/GuestMainPage";

function App() {
  return (
    <Router>
      <div>
        <GuestHeader />
        <Switch>
          <Route path="/signup-recruiter">
            <RecruiterSignUpPage />
          </Route>
          <Route path="/form-recruiter">
            <RecruiterFormPage />
          </Route>
          <Route path="/signup-jobseeker">
            <JobSeekerSignUpPage />
          </Route>
          <Route path="/signin">
            <SignInPage />
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