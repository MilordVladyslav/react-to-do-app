import React from 'react';

class SearchFilter extends React.Component {
  sendValue = (e) => {
    this.props.search(e.target.value)
  }
  addItem = (e) => {
    e.preventDefault()
    this.props.addItem()
  }
  render () {
    return (
      <div className="search-filter" onSubmit= {this.addItem}>
        <form>
          <input type="text" placeholder="Search and add new items..." className="search-filter-input" onChange = {this.sendValue} value = {this.props.text}></input>
          <input type="submit" className="submit-button"></input>
        </form>
      </div>
    )
  }
}

export default SearchFilter;