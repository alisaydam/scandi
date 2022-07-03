import { Component } from "react";
import {
  ProductCardWrapper,
  ProductImage,
  ProductName,
  ProductPrice,
  AddToCardIcon,
  OutOfStock,
  OutOfStockModal,
} from "./styles/Products.styled";
import { store } from "../state/store";

import ProductAttributes from "./ProductCardAtributes";
import { nanoid } from "@reduxjs/toolkit";
import { connect } from "react-redux";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: store.getState().selectedCurrency,
      cartArr: store.getState().addToCart,
      productData: {},
    };
    this.addToCart = this.addToCart.bind(this);
  }

  createProduct() {
    const productData = {
      id: nanoid(),
      brand: this.props.product.brand,
      name: this.props.product.name,
      prices: this.props.product.prices,
      gallery: this.props.product.gallery,
      description: this.props.product.description,
      attributes: {},
      artibuteSets: this.props.product.attributes,
    };

    this.props.product.attributes.forEach((attribute) => {
      productData.attributes[attribute.name] = "";
    });
    this.setState({
      productData: productData,
    });
  }

  componentDidMount() {
    this.createProduct();
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        currency: store.getState().selectedCurrency,
      });
    });
  }

  handleAttributeSelect = (e) => {
    const { name, value } = e;
    this.setState((prevState, props) => ({
      productData: {
        ...prevState.productData,
        attributes: {
          ...this.state.productData.attributes,
          [name]: value,
        },
      },
    }));
  };
  addToCart = (e) => {
    console.log(this.state.productData);
    this.props.addToCart(this.state.productData);
  };
  componentDidUpdate() {
    console.log("updated");
  }

  render() {
    const { name, gallery, attributes, prices, inStock, brand } =
      this.props.product;
    const price = prices.find((x) => {
      return x.currency.symbol === this.state.currency;
    });
    return (
      <>
        <ProductCardWrapper>
          {!inStock && (
            <OutOfStockModal>
              <OutOfStock>Out Of Stock</OutOfStock>
            </OutOfStockModal>
          )}
          <div style={{ position: "relative" }}>
            <ProductImage src={gallery[0]} />
            {inStock && (
              <AddToCardIcon onClick={this.addToCart}>
                <img src="empty-cart.png" alt="cart" />
              </AddToCardIcon>
            )}
          </div>
          <ProductName>{brand + " - " + name}</ProductName>
          {attributes.map((attribute, i) => {
            return (
              <ProductAttributes
                key={i}
                attribute={attribute}
                onSelecetAttribute={this.handleAttributeSelect}
              />
            );
          })}
          <ProductPrice>
            {price.currency.symbol + "" + price.amount}
          </ProductPrice>
        </ProductCardWrapper>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productData) => dispatch({ type: "add-to-cart", productData }),
  };
};
export default connect(null, mapDispatchToProps)(ProductCard);
