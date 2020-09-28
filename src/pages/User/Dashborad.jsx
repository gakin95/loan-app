import React from "react";
import { Switch, Route } from "react-router-dom";
import LayOut from "../../Comonents/Layout";
import DashboardContent from "../../Comonents/DashboardContent";
import LoanTypes from "./LoanTypes";
import LoanForm from "./LoanForm";

class Dashboard extends React.Component {
  render() {
    return (
      <LayOut>
        <Switch>
          <Route exact path="/dashboard">
            <DashboardContent />
          </Route>
          <Route path="/application">
            <LoanForm />
          </Route>
          <Route path="/packages">
            <LoanTypes />
          </Route>
        </Switch>
      </LayOut>
    );
  }
}

export default Dashboard;
