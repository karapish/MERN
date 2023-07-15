import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import CommentCreate from "./components/CommentCreate";
import Home from "./components/Home";

/*const client = new ApolloClient({
  dataIdFromObject: (o) => o.id
});*/

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/comment/new" component={CommentCreate} />
    </BrowserRouter>
  );
}

export { App };
