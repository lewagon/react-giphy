import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (typeof this.props.selectGif === "function") {
      this.props.selectGif(this.props.id)
    }
  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
