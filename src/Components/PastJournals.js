import React from 'react';
import JournalEntries from './JournalEntries';
import '../CSS/PastJournals.css';


class PastJournals extends React.Component {
  render() {
    console.log('this is props',this.props);
    return (
      <>
      {this.props.journals.length >0 ? <JournalEntries handleDelete={this.props.handleDelete} handleUpdate={this.props.handleUpdate} journals={this.props.journals}showupdatejournal={this.props.showupdatejournal}
      updatedjournal={this.props.updatedjournal}/> :<h3>There are no saved Journals</h3>
       }
      </>
    )
  }
}

export default PastJournals;