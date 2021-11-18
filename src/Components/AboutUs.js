import React from 'react';
import brandon from '../Images/brandon.png';
import bionca from '../Images/bionca.png';
import chris from '../Images/chris.png';
import angela from '../Images/angela.png';
import Figure from 'react-bootstrap/Figure';
import '../CSS/AboutUs.css';


class AboutUs extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     people: [{img: brandon, name:'Brandon'},{img: bionca, name:'Bionca'},{img: chris, name:'Chris'},{img: angela, name:'Angela'}]
  //   }
  // }

  render() {
    return(
      <Figure className='figure'>
      <section className="allBio">
      <div className="brandon-bionca">
        <div className="brandon">
        

        <Figure.Image
        className='bio-pic'
        width={184}
        height={150}
        src={brandon}
        alt="brandonImage"
      />
        <article className="names">
      <Figure.Caption><h3>Brandon Mizutani ♓ </h3>
      <p>I am a student at Code Fellows. I recently moved from Los Angeles to Seattle, Washington. I went to school for and worked in T.V. post-production. I decided to change my career after having time to reflect what would challenge and motivate me. I had prior experience in HTML & CSS. While I did learn a few JavaScript functions in college, it has only been through Code Fellows that I have gained a greater understanding of it and so much more. Upon completing Code Fellows, I hope to attain a career as a software developer, working with like-minded individuals who have the same passion for coding.</p>
      </Figure.Caption></article></div>

      <div className="bionca">
          
          
        
        <Figure.Image
        className='bio-pic'
        width={190}
        height={150}
        src={bionca}
        alt="bioncaImage"
      />
        <article className="names">
      <Figure.Caption><h3>Bionca Bond ♌</h3>
      <p>I am a Software Developer seeking to provide creative business solutions by using aspects of Javascript, React and other developer tools.</p>
      </Figure.Caption>
      </article></div></div>

      <div className='angela-chris'>
      <div className="angela">
          

        <Figure.Image
        className='bio-pic'
        width={190}
        height={200}
        src={angela}
        alt="angelaImage"
      />
      <article className="names">  
      <Figure.Caption><h3>Angela Dzodzomenyo ♌ </h3>
      <p>Software Developer who loves a challenge and is always curious. Likes to code, tinker with electronics and play video games. I've learned throughout my work history the importance of communication, creativity and earnestness. I think those are some of my strong suits and I look forward to being part of a company that allows me to do some of the things that I do best.</p>
      </Figure.Caption></article></div>
      
      <div className="chris">

        <Figure.Image
        className='bio-pic'
        width={190}
        height={150}
        src={chris}
        alt="chrisImage"
      />
      
        <article className="names">
      <Figure.Caption><h3>Chris Reichert ♑ </h3>
      <p>An aspiring python software developer. I am formally a construction project manager, military officer, and helicopter pilot. I have my Project Management Professional (PMP) certification going on 3 years and over 12 years of leadership experience. I wanted to pivot sectors and my career to align more with my passion.
      
      I have a passion for building and making things work.</p>

      </Figure.Caption></article></div></div></section>

    </Figure>
    

    );
  }
}

export default AboutUs;