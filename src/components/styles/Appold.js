import { FETCH_PRODUCTS } from "./query/queries";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import { graphql } from "@apollo/client/react/hoc";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Home from "./routes/Home";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});
const withCharacter = graphql(FETCH_PRODUCTS);

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default withCharacter(App);
