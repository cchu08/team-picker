import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchTerm } from '../actions/teampickerActions';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSearchTermChange, searchTerm } = this.props;
    return (
      <div>
        <input type="text" placeholder="Find Teams" onChange={handleSearchTermChange} value={searchTerm}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value))
  }
});



export default connect(mapStateToProps, mapDispatchToProps)(Search);