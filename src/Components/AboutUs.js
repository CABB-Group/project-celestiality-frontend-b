import React from 'react';
import img from '../Images/brandonpic.jpg';
import Figure from 'react-bootstrap/Figure';
// import '../CSS/AboutUs.css';

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [{img: img, name:'Brandon'},{img: img, name:'Brandon'},{img: img, name:'Brandon'},{img: img, name:'Brandon'}]
    }
  }

  render() {
    return(
      <Figure className='figure'>
      {this.state.people.map((el) => <section><Figure.Image
        width={150}
        height={150}
        src={img}
        alt="brandon image"
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption></section>)}
      
    </Figure>
    

    );
  }
}

export default AboutUs;