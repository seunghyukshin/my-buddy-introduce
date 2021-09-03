import React from "react";
import { Route } from "react-router";
import { Home, Auth, Read } from "./pages";
import "./App.css";

function App() {
  return (
    <div>
      <Route exact path="/" component={Read} />
      <Route path="/oauth" component={Auth} />
    </div>
  );
}

export default App;
