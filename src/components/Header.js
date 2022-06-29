import React, { Component } from "react";
import { Nav, NavMenu, MenuItem } from "./styles/Header.styled";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCurrencyOpen: "false",
    };
  }

  componentDidMount() {
    this.setState({ myState: "Florida" });
  }

  render() {
    const { myState } = this.state || {};
    const message = `The current state is ${myState}.`;

    return (
      <Nav>
        <NavMenu>
          <MenuItem selected={true}>WOMEN</MenuItem>
          <MenuItem> MEN</MenuItem>
          <MenuItem> KIDS</MenuItem>
        </NavMenu>
        <div>
          <img src="logo.png" />
        </div>
        <NavMenu>
          <MenuItem onClick={() => console.log(this.state)}>
            <img src="currency.png" />
          </MenuItem>
          <MenuItem>
            <img src="cart.png" />
          </MenuItem>
        </NavMenu>
      </Nav>
    );
  }
}

export default Header;
