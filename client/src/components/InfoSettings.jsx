import React, { Component } from "react";
import {
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody
} from "reactstrap";

class InfoSettings extends Component {
  render() {
    return (
      <div>
        <Button id={this.props.id} type="button">
          <i className="fas fa-info-circle"></i>
        </Button>

        <UncontrolledPopover
          trigger="legacy"
          placement="right"
          target={this.props.id}
        >
          <PopoverHeader>How to find: {this.props.id}</PopoverHeader>
          <PopoverBody>{this.props.text}</PopoverBody>
        </UncontrolledPopover>
        <i className="fas fa-info-circle"></i>
      </div>
    );
  }
}

export default InfoSettings;
