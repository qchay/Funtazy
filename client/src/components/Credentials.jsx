import React, { PureComponent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import InfoSettings from "./InfoSettings";

class Credentials extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPublic: true,
      text: "Public",
      response: "",
      post: { leagueID: "", espnS2: "", swid: "" },
      responseToPost: ""
    };
  }

  handleClick = () => {
    if (!this.state.isPublic) {
      var post = { ...this.state.post };
      post.espnS2 = "";
      post.swid = "";
      this.setState({ text: "Public", post, isPublic: true });
    } else {
      this.setState({ text: "Private", isPublic: false });
    }
  };

  handleInfo = e => {
    if (e === "LeagueID") {
      return (
        <div>
          <ul>
            <li>Go to your ESPN fantasy football league home page</li>
            <li>Copy & paste the value after "leagueId=" from the URL</li>
          </ul>
        </div>
      );
    } else if (e === "EspnS2") {
      return (
        <div>
          <ul>
            <li>
              Go to <a href="http://www.espn.com">ESPN</a>
            </li>
            <li>Right Click > Inspect > Application > Cookies > espn.com</li>
            <li>Filter "espn_s2"</li>
            <li>Copy & paste value</li>
          </ul>
        </div>
      );
    } else if (e === "SWID") {
      return (
        <div>
          <ul>
            <li>
              Go to <a href="http://www.espn.com">ESPN</a>
            </li>
            <li>Right Click > Inspect > Application > Cookies > espn.com</li>
            <li>Filter "SWID"</li>
            <li>Copy & paste value</li>
          </ul>
          <strong>Note: </strong>If more than one SWID values, pick SWID value
          with .espn.com domain
        </div>
      );
    }
  };

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

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      post: {
        ...this.state.post,
        [name]: value
      }
    });
  };

  HandleForm = props => {
    const text = props.text;
    if (text === "Private") {
      return (
        <React.Fragment>
          <Form.Group controlId="espnS2">
            <Form.Label>espnS2</Form.Label>
            <div className="input-group">
              <Form.Check
                type="text"
                name="espnS2"
                value={this.state.post.espnS2}
                onChange={this.handleChange}
                placeholder="Enter espnS2"
                required
              />
              <InfoSettings id="EspnS2" text={this.handleInfo("EspnS2")} />
            </div>
          </Form.Group>
          <Form.Group controlId="swid">
            <Form.Label>SWID</Form.Label>
            <div className="input-group">
              <Form.Check
                type="text"
                name="swid"
                value={this.state.post.swid}
                onChange={this.handleChange}
                placeholder="Enter SWID"
                required
              />
              <InfoSettings id="SWID" text={this.handleInfo("SWID")} />
            </div>
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
        </Button>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="leagueID">
            <Form.Label>League ID</Form.Label>
            <div className="input-group">
              <Form.Check
                type="Number"
                name="leagueID"
                value={this.state.post.leagueID}
                onChange={this.handleChange}
                placeholder="Enter League ID"
                required
              />
              <InfoSettings id="LeagueID" text={this.handleInfo("LeagueID")} />
            </div>
          </Form.Group>
          <this.HandleForm text={this.state.text} />
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={
                this.state.text === "Public"
                  ? this.state.post.leagueID === ""
                    ? null
                    : this.props.handleClose
                  : this.state.post.leagueID === "" ||
                    this.state.post.espnS2 === "" ||
                    this.state.post.swid === ""
                  ? null
                  : this.props.handleClose
              }
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
