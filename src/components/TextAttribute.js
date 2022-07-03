import React from "react";
import { TextAttribute } from "./styles/Text.styled";

export default class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marked: true,
    };
  }

  render() {
    return (
      <>
        <TextAttribute
          marked={this.state.marked}
          onClick={this.cleanAttributes}
        >
          {this.props.value}{" "}
        </TextAttribute>
        ;
      </>
    );
  }
}
