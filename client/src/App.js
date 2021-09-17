import React from "react";
import { Route } from "react-router";
import { Home, Read, Write } from "./pages";
import { Header, Footer } from "./components/common";
import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <Route exact path="/" component={Read} />
      <Route path="/write" component={Write} />

      <Footer />
    </div>
  );
}

export default App;
