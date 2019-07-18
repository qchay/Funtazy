import React, { PureComponent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

class Credentials extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      isPublic: true,
      text: "Public",
      response: "",
      post: { leagueID: "", espnS2: "", swid: "" },
      responseToPost: ""
    };
  }

  handleClick() {
    if (!this.state.isPublic) {
      var post = { ...this.state.post };
      post.espnS2 = "";
      post.swid = "";
      this.setState({ text: "Public", post, isPublic: true });
    } else {
      this.setState({ text: "Private", isPublic: false });
    }
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch("/api/credentials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.post })
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      post: {
        ...this.state.post,
        [name]: value
      }
    });
  }

  HandleForm = props => {
    const text = props.text;
    if (text === "Private") {
      return (
        <React.Fragment>
          <Form.Group controlId="espnS2">
            <Form.Label>espnS2</Form.Label>
            <Form.Check
              type="text"
              name="espnS2"
              value={this.state.post.espnS2}
              onChange={this.handleChange}
              placeholder="Enter espnS2"
              required
            />
          </Form.Group>
          <Form.Group controlId="swid">
            <Form.Label>SWID</Form.Label>
            <Form.Check
              type="text"
              name="swid"
              value={this.state.post.swid}
              onChange={this.handleChange}
              placeholder="Enter SWID"
              required
            />
          </Form.Group>
        </React.Fragment>
      );
    }
    return null;
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClick} variant="outline-primary">
          {this.state.text}
        </Button>{" "}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="leagueID">
            <Form.Label>League ID</Form.Label>
            <Form.Check
              type="Number"
              name="leagueID"
              value={this.state.post.leagueID}
              onChange={this.handleChange}
              placeholder="Enter League ID"
              required
            />
          </Form.Group>
          <this.HandleForm text={this.state.text} />
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              type="submit"
              // onClick={this.props.handleClose}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </div>
    );
  }
}

export default Credentials;
