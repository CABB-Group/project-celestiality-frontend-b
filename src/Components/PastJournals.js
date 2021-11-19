import React from 'react';
import JournalEntries from './JournalEntries';
import '../CSS/PastJournals.css';
// import UpdateJournal from './UpdateJournal.js';


class PastJournals extends React.Component {
  render() {
    console.log('this is props',this.props);
    return (
      <>
      {this.props.journals.length >0 ? <JournalEntries 
        updatedjournal={this.props.updatedjournal}
        showUpdateModal={this.props.showUpdateModal}
        showupdatejournal={this.props.showupdatejournal}
        journals={this.props.journals}
        handleDelete={this.props.handleDelete}
        handleCreate={this.props.handleCreate}
        handleUpdate={this.props.handleUpdate}
        pullUpdatedEntry={this.props.pullUpdatedEntry}/> :<h3>There are no saved Journals</h3>
       }
       {/* {this.props.showupdatejournal ?
            <UpdateJournal
              showupdatejournal={this.props.showupdatejournal}
              updatedjournal={this.props.updatedjournal}
            handleUpdate={this.props.handleUpdate}
            handleClose ={()=> {this.props.onClose()}}
            
            
            /> : ''} */}
      </>
    )
  }
}

export default PastJournals;