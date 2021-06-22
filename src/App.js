import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const Chats = () => <h1>Chats</h1>;
  const Status = () => <h1>Status</h1>;
  const Calls = () => <h1>Calls</h1>;
  return (
    <Router>
      <>
        <div>
          <Navbar />
          <Switch>
            <Route
              path="/chats"
              render={() => {
                return <Chats />;
              }}
            />
            <Route
              path="/status"
              render={() => {
                return <Status />;
              }}
            />
            <Route
              path="/calls"
              render={() => {
                return <Calls />;
              }}
            />
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
