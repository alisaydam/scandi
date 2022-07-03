import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./state/store";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query {
        categories {
          name
          products {
            id
            name
            brand
            inStock
            gallery
            prices {
              amount
              currency {
                symbol
                label
              }
            }
            attributes {
              type
              name
              items {
                value
                displayValue
                id
              }
            }
          }
        }
      }
    `,
  })
  .then((result) => result);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
  // </React.StrictMode>
);

 
