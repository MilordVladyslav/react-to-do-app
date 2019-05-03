import React from 'react';

class WarningMessage extends React.Component {
  render () {
    return (
      <div className="warning-message">
        <p>{this.props.message}</p>
      </div>
    )
  }
}

export default WarningMessage