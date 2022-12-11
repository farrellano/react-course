import React from "react";
import { Route, Switch, Link } from "wouter";
import "./App.css";
import Home from "./pages/home/Index";
import SearchResults from "./pages/search-results/Index";
import Detail from "./pages/detail/Index";
import { GifsContextProvider } from "./context/GifContextProvider";

function App() {
  return (
    <div className="App">
      <Link href="/">
        <div>
          <h1>My firts App</h1>
        </div>
      </Link>
      <GifsContextProvider>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/SearchResults/:keyword" component={SearchResults} />
          <Route path="/Detail/:id" component={Detail} />
          <Route path="/:anything*">
            <div>
              <center>
                <h1>Page not found :(</h1>
              </center>
            </div>
          </Route>
        </Switch>
      </GifsContextProvider>
    </div>
  );
}

export default App;
