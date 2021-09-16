import React from "react";
import { Route } from "react-router";
import { Home, Auth, Read, Write } from "./pages";
import { Header, Footer } from "./components/common";
import "./App.css";

function App() {
  return (
    <div>
      <Header/>

      <Route exact path="/" component={Read} />
      <Route path="/write" component={Write} />
      <Route path="/oauth" component={Auth} />

      <Footer/>
    </div>
  );
}

export default App;
