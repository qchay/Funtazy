import React, { Component } from "react";
import { FaQuestionCircle } from "react-icons/fa";

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
        <Button color="#ff5c5c" id={this.props.id} type="button">
          <FaQuestionCircle />
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
