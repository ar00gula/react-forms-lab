import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      content: ""
    };
  }

  handleInput = event => {
    this.setState({
      content: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text"
          name="message"
          id="message"
          onChange={event => {
            this.handleInput(event)}}
          value={this.state.content}
          />
        <p>Characters Remaining: {this.props.maxChars - this.state.content.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
