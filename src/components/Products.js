import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../hooks/userProducts";
import {
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductName,
  ProductPrice,
} from "./styles/Products.styled";
import { useProducts, GET_PRODUCTS } from "../hooks/userProducts";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  fetchProducts,
};

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    console.log("res");
    return (
      <ProductGrid>
        <ProductCard>
          <ProductImage src="product.png" />
          <ProductName>Apollo Running Shoess</ProductName>
          <ProductPrice>$50.00</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage src="product.png" />
          <ProductName>Apollo Running Shoess</ProductName>
          <ProductPrice>$50.00</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage src="product.png" />
          <ProductName>Apollo Running Shoess</ProductName>
          <ProductPrice>$50.00</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage src="product.png" />
          <ProductName>Apollo Running Shoess</ProductName>
          <ProductPrice>$50.00</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage src="product.png" />
          <ProductName>Apollo Running Shoess</ProductName>
          <ProductPrice>$50.00</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage src="product.png" />
          <ProductName>Apollo Running Shoess</ProductName>
          <ProductPrice>$50.00</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage src="product.png" />
          <ProductName>Apollo Running Shoess</ProductName>
          <ProductPrice>$50.00</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage src="product.png" />
          <ProductName>Apollo Running Shoess</ProductName>
          <ProductPrice>$50.00</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage src="product.png" />
          <ProductName>Apollo Running Shoess</ProductName>
          <ProductPrice>$50.00</ProductPrice>
        </ProductCard>
      </ProductGrid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
