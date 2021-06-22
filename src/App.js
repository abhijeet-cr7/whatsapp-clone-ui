import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const Chats = () => <h1>All girls loves Maggi :)</h1>;
  const Status = () => <h1>All girls wants Maggi :))</h1>;
  const Calls = () => <h1>All girls desire Maggi :P</h1>;
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
