import { Component } from "react";

class ProductAttributes extends Component {
  render() {
    return <div>{JSON.stringify(this.props)}</div>;
  }
}

export default ProductAttributes;
