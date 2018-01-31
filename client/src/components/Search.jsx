import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Search } from 'semantic-ui-react';
import { setSearchTerm } from '../actions/teampickerActions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSearchTermChange, searchTerm } = this.props;
    return (
      <div style={{ padding: '5%' }}>
        <Search showNoResults={false} placeholder="Find Teams" onSearchChange={handleSearchTermChange} value={searchTerm}/>
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



export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);