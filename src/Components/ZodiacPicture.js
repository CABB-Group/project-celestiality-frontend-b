import React from 'react';
import '../CSS/ZodiacPicture.css';

class ZodiacPicture extends React.Component {
  render() {
    return (
        <img src={this.props.zodiacpic} alt={this.props.zodiacpic} width="150px" height="150px"></img>
    )
  }
};

export default ZodiacPicture;