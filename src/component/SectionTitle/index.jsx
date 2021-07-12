import React from 'react';
import PropTypes from "prop-types";

import './index.scss';
import '../../index.scss';

class SectionTitle extends React.Component {
  render() {
    return (
      <div className="c-section-title">
        <h2 className="c-section-title__text">{this.props.title}</h2>
      </div>
    );
  };

  static propTypes = {
    title: PropTypes.string,
  };
};

export default SectionTitle;