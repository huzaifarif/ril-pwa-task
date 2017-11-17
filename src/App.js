import React, { Component } from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import "./App.css"

class App extends Component {
  render() {
    return <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <Link to={`/`}>
              <h2>Home</h2>
            </Link>
          </div>
          <div className="App-content">
            <Switch>
              <Route exact={true} path="/" component={ArticleList} />
              <Route path="/article/:id" component={ArticleList} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>;
  }
}

export default App;
