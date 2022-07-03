import React, { Component } from "react";
import {
  Nav,
  NavMenu,
  MenuItem,
  Modal,
  CardOverlay,
  CurrencyMenu,
  CurrencyMenuItem,
  CurrencyIcon,
  CartItemNumber,
  CartNumber,
} from "./styles/Header.styled";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { store } from "../state/store";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      showModal: false,
      cart: store.getState().addToCart,
      currency: store.getState().selectedCurrency,
    };
  }
  openCurrencySelect = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };
  updateCurrency = (e) => {
    this.props.updateCurrency(e.target.value);
    this.setState({ currency: store.getState().selectedCurrency });
    this.setState({ isMenuOpen: false });
  };

  componentDidMount() {}
  render() {
    return (
      <Nav>
        {this.state.showModal && (
          <Modal>
            <CardOverlay>
              <h1>my bag</h1>
            </CardOverlay>
          </Modal>
        )}
        <NavMenu>
          <MenuItem selected={true}>WOMEN</MenuItem>
          <MenuItem> MEN</MenuItem>
          <MenuItem> KIDS</MenuItem>
        </NavMenu>
        <Link to={`/cart`}>
          <div>
            <img src="logo.png" alt="dd" />
          </div>
        </Link>

        <NavMenu>
          <MenuItem>
            {this.state.isMenuOpen && (
              <CurrencyMenu onClick={this.updateCurrency}>
                <CurrencyMenuItem value="$">$ USD</CurrencyMenuItem>
                <CurrencyMenuItem value="£">£ GPD</CurrencyMenuItem>
                <CurrencyMenuItem value="A$">A$ AUD</CurrencyMenuItem>
                <CurrencyMenuItem value="¥">¥ JPY</CurrencyMenuItem>
                <CurrencyMenuItem value="₽">₽ RUB</CurrencyMenuItem>
              </CurrencyMenu>
            )}
            <CurrencyIcon onClick={this.openCurrencySelect}>
              {this.state.currency} {this.state.isMenuOpen ? " 🢑" : " 🢓"}
            </CurrencyIcon>
          </MenuItem>
          <MenuItem
            style={{ position: "relative" }}
            onClick={() => this.setState({ showModal: !this.state.showModal })}
          >
            <img src="cart.png" alt="cart" />
            <CartItemNumber>
              <CartNumber>5</CartNumber>
            </CartItemNumber>
          </MenuItem>
        </NavMenu>
      </Nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    person: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrency: (currency) => {
      dispatch({ type: "change-currency", currency });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
