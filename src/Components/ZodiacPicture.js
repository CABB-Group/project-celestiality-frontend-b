import React from 'react';
import '../CSS/ZodiacPicture.css';

class ZodiacPicture extends React.Component {
  render() {
    return (
        <img src={this.props.zodiacpic} alt={this.props.zodiacpic} width="250px" height="200px" className="zod-pic"></img>
    )
  }
};

export default ZodiacPicture;