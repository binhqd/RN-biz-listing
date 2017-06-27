import React from 'react';
import PropTypes from 'prop-types';

class ShowIf extends React.Component {

  render() {
    if (this.props.condition) {
      if (typeof this.props.children.length != "undefined") {
        return (
          <div>
            {this.props.children}
          </div>
        )
      } else return this.props.children;

    } else {
      return null;
    }
  }
}

ShowIf.propTypes = {
  condition: PropTypes.bool.isRequired
}

ShowIf.defaultProps = {
  condition: true
}

export default ShowIf;
