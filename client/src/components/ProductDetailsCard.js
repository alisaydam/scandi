import { Component } from "react";
import {
  DetailsCard,
  AboutSection,
  ProductBrand,
  ProductName,
  ProductPrice,
  GallerySection,
  ProductCountUpdate,
  ProductCount,
  CountWrap,
  ImageWrap,
  ArrowsWrap,
} from "./styles/DetailsCard.styled";
import { store } from "../state/store";
import DetailsCardAttributes from "./DetailsCardAttributes";
import { connect } from "react-redux";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedImage: 0,
      currency: store.getState().selectedCurrency,
      productData: {},
    };
  }

  handleAttributeSelect = async (data) => {
    let { name, value } = data;
    await this.setState((prevState, props) => ({
      productData: {
        ...prevState.productData,
        count: this.props.item.count,
        attributes: {
          ...this.state.productData.attributes,
          [name]: value,
        },
      },
    }));
    this.props.addToCart(this.state.productData);
  };

  createProduct() {
    const productData = {
      ...this.props.item,
      count: 0,
    };
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
  changeImage = (e) => {
    const galleryLegnth = this.state.productData.gallery.length - 1;
    if (e.target.id === "+") {
      if (this.state.displayedImage === galleryLegnth)
        return this.setState({ displayedImage: 0 });
      this.setState({ displayedImage: this.state.displayedImage + 1 });
      return;
    }
    this.setState({ displayedImage: this.state.displayedImage - 1 });
    if (this.state.displayedImage === 0) {
      this.setState({
        displayedImage: galleryLegnth,
      });
    }
  };

  handleCount = (e) => {
    this.props.productCount({
      id: this.props.item.uniqueID,
      operator: e.target.id,
    });
  };

  render() {
    const { name, brand, prices } = this.props.item;

    const price = prices.find((x) => {
      return x.currency.symbol === this.state.currency;
    });
    const item = this.props.item;
    const selectedAttributes = Object.entries(item.attributes);
    return (
      <DetailsCard baseSize={this.props.baseSize}>
        <AboutSection baseSize={this.props.baseSize}>
          <ProductBrand>{brand}</ProductBrand>
          <ProductName>{name}</ProductName>
          <ProductPrice>
            {price.currency.symbol + "" + price.amount}
          </ProductPrice>
          <div>
            {item.attributeSets.map((attribute, i) => {
              return (
                <div>
                  <DetailsCardAttributes
                    baseSize={this.props.baseSize}
                    getValues={this.handleAttributeSelect}
                    key={i}
                    attribute={attribute}
                    selectedAttribute={selectedAttributes[i]}
                  />
                </div>
              );
            })}
          </div>
        </AboutSection>
        <GallerySection baseSize={this.props.baseSize}>
          <CountWrap baseSize={this.props.baseSize} onClick={this.handleCount}>
            <ProductCountUpdate baseSize={this.props.baseSize} id="+">
              +
            </ProductCountUpdate>
            <ProductCount baseSize={this.props.baseSize}>
              {this.props.item.count}
            </ProductCount>
            <ProductCountUpdate baseSize={this.props.baseSize}>
              -
            </ProductCountUpdate>
          </CountWrap>
          <ImageWrap>
            <div style={{ position: "relative" }}>
              <img
                src={item.gallery[this.state.displayedImage]}
                style={{ height: "100%" }}
                alt={item.id}
              />
              <ArrowsWrap onClick={this.changeImage}>
                {item.gallery.length > 1 && (
                  <>
                    <img src="left-arrow.png" alt="arrow" id="-" />
                    <img src="right-arrow.png" alt="arrow" id="+" />
                  </>
                )}
              </ArrowsWrap>
            </div>
          </ImageWrap>
        </GallerySection>
      </DetailsCard>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productData) => dispatch({ type: "update-cart", productData }),
    productCount: (data) => dispatch({ type: "update-count", data }),
  };
};

export default connect(null, mapDispatchToProps)(ProductDetails);
