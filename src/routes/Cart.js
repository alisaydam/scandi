import { Component } from "react";
import { connect } from "react-redux";
import ProductDetailsCard from "../components/ProductDetailsCard";
import {
  TotalWrapper,
  Section,
  Item,
  ItemBold,
  OrderButton,
} from "../components/styles/Cart.styled";
import {
  DetailsWrapCartPage,
  CartDetailsLimiter,
} from "../components/styles/DetailsCard.styled";
import { store } from "../state/store";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: store.getState().cartStore,
      currency: store.getState().selectedCurrency,
    };
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        cart: store.getState().cartStore,
        currency: store.getState().selectedCurrency,
      });
    });
  }

  render() {
    console.log(this.state.cart.totalCost);

    return (
      <>
        <DetailsWrapCartPage>
          {this.state.cart.cart.map((product, i) => (
            <CartDetailsLimiter>
              <ProductDetailsCard baseSize={10} key={i} item={product} />
            </CartDetailsLimiter>
          ))}
          {this.state.cart.cart.length > 0 ? (
            <TotalWrapper>
              <Section>
                <Item>Tax 21%: </Item>
                <Item>Quantity:</Item>
                <Item>Total:</Item>
              </Section>
              <Section>
                <ItemBold>
                  {((this.state.cart.totalCost / 100) * 21).toFixed(2) || 0}{" "}
                  {this.state.currency}
                </ItemBold>
                <ItemBold>{this.state.cart.cart.length}</ItemBold>
                <ItemBold>
                  {(
                    (this.state.cart.totalCost / 100) * 21 +
                    +this.state.cart.totalCost
                  ).toFixed(2) || 0}{" "}
                  {this.state.currency}
                </ItemBold>
              </Section>
            </TotalWrapper>
          ) : (
            <TotalWrapper>
              <Section>
                <Item>There is no items in the cart! </Item>
              </Section>
            </TotalWrapper>
          )}
          <OrderButton>ORDER</OrderButton>
        </DetailsWrapCartPage>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cartTotal: (total) => dispatch({ type: "cart-total", total }),
  };
};

export default connect(null, mapDispatchToProps)(Cart);
