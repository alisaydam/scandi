import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../hooks/userProducts";
import { graphql } from "@apollo/client/react/hoc";

import { FETCH_PRODUCTS } from "../query/queries";
import ProductCard from "./ProductCard";
import {
  ProductGrid,
  ProductCardWrapper,
  ProductImage,
  ProductName,
  ProductPrice,
} from "./styles/Products.styled";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.data.loading,
      products: [],
    };
  }
  // const arr = this.props.data.categories;
  // console.log([...arr[1].products, ...arr[2].products]);

  displayProductsOnCategory() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    console.log(this.props.data.categories[0].products);
    const products = this.props.data.categories[0].products.map((product) => (
      <ProductCard product={product} />
    ));
    return products;
  }
  render() {
    return <ProductGrid>{this.displayProductsOnCategory()}</ProductGrid>;
  }
}

const getProducts = graphql(FETCH_PRODUCTS);

export default getProducts(Products); 
