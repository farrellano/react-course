import React from "react";
import { Route, Switch } from "wouter";
import "./App.css";
import Home from "./pages/home/Index";
import SearchResults from "./pages/search-results/Index";
import Detail from "./pages/detail/Index";
import LoginPage from "./pages/login/Index";
import { GifsContextProvider } from "./context/GifContextProvider";
import { UserContextProvider } from "./context/UserContext";
import { Container, Header, Content } from "rsuite";
import { CustomProvider } from "rsuite";
import HeaderApp from "./components/header/Index";

import "rsuite/dist/rsuite.min.css";

function App() {
  return (
    <CustomProvider theme="dark">
      <div className="App">
        <UserContextProvider>
          <Container>
            <Header>
              <HeaderApp />
            </Header>
            <Content>
              <GifsContextProvider>
                <Switch>
                  <Route path="/" component={Home} />
                  <Route path="/Login" component={LoginPage} />
                  <Route
                    path="/SearchResults/:keyword"
                    component={SearchResults}
                  />
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
            </Content>
          </Container>
        </UserContextProvider>
      </div>
    </CustomProvider>
  );
}

export default App;
