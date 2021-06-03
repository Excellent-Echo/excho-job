import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import GuestHeader from "./components/GuestHeader";

// pages
import RecruiterForm from "./pages/recruiter/RecruiterForm";
import RecruiterSignUp from "./pages/recruiter/RecruiterSignUp";
import JobSeekerSignUp from "./pages/jobseeker/JobSeekerSignUp";
import SignIn from "./pages/SignIn";
import GuestMainPage from "./pages/GuestMainPage";

function App() {
  return (
    <Router>
      <div>
        <GuestHeader />
        <Switch>
          <Route path="/signup-recruiter">
            <RecruiterSignUp />
          </Route>
          <Route path="/form-recruiter">
            <RecruiterForm />
          </Route>
          <Route path="/signup-jobseeker">
            <JobSeekerSignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
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