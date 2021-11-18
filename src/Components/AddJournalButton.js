import { Component } from 'react';
import Button from 'react-bootstrap/Button';


export default class AddJournalButton extends Component {


  render() {

    return (
      <Button variant="info" size="lg"
        onClick={this.props.onButtonClick}>
        Create a Journal Submission
      </Button>
    );
  }
}