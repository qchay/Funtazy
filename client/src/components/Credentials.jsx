import React, { PureComponent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class Credentials extends PureComponent {
  constructor(props) {
    super(props);
    this.handlePublicClick = this.handlePublicClick.bind(this);
    this.handlePrivateClick = this.handlePrivateClick.bind(this);
    this.state = { text: "Public", response: "", post: "", responseToPost: "" };
  }

  handlePublicClick() {
    this.setState({ text: "Public" });
  }

  handlePrivateClick() {
    this.setState({ text: "Private" });
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
    const response = await fetch("/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.post })
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  HandleButton = props => {
    const text = props.text;
    if (text === "Public") {
      return (
        <Button onClick={this.handlePrivateClick} variant="outline-primary">
          {this.state.text}
        </Button>
      );
    } else {
      return (
        <Button onClick={this.handlePublicClick} variant="outline-primary">
          {this.state.text}
        </Button>
      );
    }
  };

  HandleForm = props => {
    const text = props.text;
    if (text === "Private") {
      return (
        <React.Fragment>
          <Form.Group controlId="espnS2">
            <Form.Label>espnS2</Form.Label>
            <Form.Check type="text" placeholder="Enter espnS2" required />
          </Form.Group>
          <Form.Group controlId="swid">
            <Form.Label>SWID</Form.Label>
            <Form.Check type="text" placeholder="Enter SWID" required />
          </Form.Group>
        </React.Fragment>
      );
    }
    return null;
  };

  render() {
    return (
      <div>
        <this.HandleButton text={this.state.text} />
        <Form>
          <Form.Group controlId="leagueID">
            <Form.Label>League ID</Form.Label>
            <Form.Check type="Number" placeholder="Enter League ID" required />
          </Form.Group>
          <this.HandleForm text={this.state.text} />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Enter your espnS2:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default Credentials;
