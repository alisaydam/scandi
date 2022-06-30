import { Component } from "react";
import {
  ProductCardWrapper,
  ProductImage,
  ProductName,
  ProductPrice,
} from "./styles/Products.styled";
import { store } from "../state/store";
import ProductAttributes from "./ProductCardAtributes";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: store.getState().selectedCurrency,
    };
  }
  render() {
    const { name, gallery, attributes, prices, instock, brand } =
      this.props.product;
    const price = prices.find(
      (currency) => currency.symbol === this.props.currency
    );
    console.log(price);
    return (
      <>
        <ProductCardWrapper>
          <ProductImage src={gallery[0]} />
          <ProductName>{brand + " - " + name}</ProductName>
          <ProductAttributes attributes={attributes} />
          <ProductPrice>
            {price.currency.symbol + "" + price.amount}
          </ProductPrice>
        </ProductCardWrapper>
      </>
    );
  }
}

export default ProductCard;
