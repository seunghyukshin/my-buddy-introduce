import React from "react";
import { Route } from "react-router";
import { Home, Auth, Read, Write } from "./pages";
import "./App.css";

function App() {
  return (
    <div>
      <Route exact path="/" component={Write} />
      <Route path="/oauth" component={Auth} />
    </div>
  );
}

export default App;
