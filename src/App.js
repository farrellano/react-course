import React from "react";
import { Route, Switch } from "wouter";
import "./App.css";
import Home from "./pages/home/Index";
import SearchResults from "./pages/search-results/Index";

function App() {
  return (
    <div className="App">
      <div>
        <h1>My firts App</h1>
      </div>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/SearchResults/:keyword" component={SearchResults} />
      </Switch>
    </div>
  );
}

export default App;
