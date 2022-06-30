import React, { Component } from "react";
import { Nav, NavMenu, MenuItem } from "./styles/Header.styled";
import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Nav>
        <button
          onClick={() => {
            this.props.add(10);
          }}
        >
          ddwadwdwa
        </button>
        {JSON.stringify(this.props)}
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

const mapStateToProps = (state) => {
  console.log("state");
  console.log(state);
  return {
    person: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (num) => dispatch({ type: "add", num }),
    dec: (num) => dispatch({ type: "dec", num }),
    mul: (num) => dispatch({ type: "mul", num }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
