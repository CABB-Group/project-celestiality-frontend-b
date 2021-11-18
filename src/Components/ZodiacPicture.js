import React from 'react';
import '../CSS/ZodiacPicture.css';

class ZodiacPicture extends React.Component {
  render() {
    return (
        <img src={this.props.zodiacpic} alt={this.props.zodiacpic}></img>
    )
  }
};

export default ZodiacPicture;