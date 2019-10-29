import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }
  handleChange = (event) =>{
    this.setState({
      input: event.target.value
    })
    console.log(this.state.input)
  }

  showRemainingLetter(){
    return (<p>{this.props.maxChars - this.state.input.length}</p>)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value = {this.state.input}/>
        {this.showRemainingLetter()}
      </div>
    );
  }
}

export default TwitterMessage;
