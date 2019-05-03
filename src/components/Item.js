import React from 'react';

class Item extends React.Component {
  render () {
    return (
      <div className="item">
        <div className="item-text">{this.props.text}</div>
        <div className="actions">
          <div className="action complete"><p>ok</p></div>
          <div className="action change"><p>ch</p></div>
          <div className="action delete"><p>de</p></div>
        </div>
      </div>
    )
  }
}

export default Item;