import React from "react";
import { Route } from "react-router";
import { Home, Auth } from "./pages";
function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/oauth" component={Auth} />
    </div>
  );
}

export default App;
