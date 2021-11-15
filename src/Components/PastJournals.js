import React from 'react';
import JournalEntries from './JournalEntries';


class PastJournals extends React.Component {
  render() {
    return (
      <>
      {this.props.showupdatejournal ? <h3>There are no saved Journals</h3> :
      <JournalEntries handleDelete={this.props.handleDelete} handleUpdate={this.props.handleUpdate} journals={this.props.journals}showupdatejournal={this.props.showupdatejournal}
      updatedjournal={this.props.updatedjournal}/> }
      </>
    )
  }
}

export default PastJournals;