import React from 'react';

class Categories extends React.Component {
  changeToUncompleted = () => {
    this.props.activeCategory('Uncompleted')
  }
  changeToCompleted = () => {
    this.props.activeCategory('Completed')
  }
  changeToAll = () => {
    this.props.activeCategory('All')
  }
  render () {
    return (
      <div className="categories">
        <div className="category uncompleted" onClick = {this.changeToUncompleted}><span>Uncompleted</span></div>
        <div className="category completed" onClick = {this.changeToCompleted}><span>Completed</span></div>
        <div className="category all" onClick = {this.changeToAll}><span>all</span></div>
      </div>
    )
  }
}

export default Categories;