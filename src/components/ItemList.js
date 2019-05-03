import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
  render() {
    const filtered = this.props.items.filter((item) => {
      return item.status === this.props.currentCategory || this.props.currentCategory === 'All'
    })
    const item = filtered.map((item) => (
      <Item 
      key = {item.id}
      text = {item.text}
      />
    ));
    return (
      <div className="item-list">
      {item}
      </div>
    ) 
  }
}

export default ItemList;