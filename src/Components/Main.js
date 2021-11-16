import React from "react";
import Astrological from "./Astrological.js";
import BirthDate from '../LoginComponents/BirthDate.js';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showmodal: true,
    };
  }

  changeBirthdayModal = (element) => {
    // console.log('Main handle submit: ', element);
    // e.preventDefault();
    this.setState({
      showmodal: element
    })
  }


  render() {
      console.log(this.props.journals);
    return (
      <>
        
         
            {this.state.showmodal ?
              <BirthDate
                changeBirthdayModal={this.changeBirthdayModal}
                showModal={this.state.showmodal}
                setBirthDay={this.props.setBirthDay} />
              : <Astrological
                userInfo={this.props.userInfo} handleDelete={this.props.handleDelete} handleUpdate={this.props.handleUpdate} journals={this.props.journals} showupdatejournal={this.props.showupdatejournal}
                updatedjournal={this.props.updatedjournal} handleCreate={this.props.handleCreate}/>}

        
       

      </>


    );
  }
}

// (<JournalEntry username={this.state.username} journalentry={this.state.journalentry} />)}

export default Main;
