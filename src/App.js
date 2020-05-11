import React from "react";
import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LandingPage } from "./landing.page";
import { AppLayout } from "./app.layout";
import { ProtectedRoute } from "./protected.route";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <ProtectedRoute path="/home" component={AppLayout} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
