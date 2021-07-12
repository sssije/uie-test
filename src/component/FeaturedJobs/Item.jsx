import React from 'react';
import PropTypes from "prop-types";

import './index.scss';
import '../../index.scss';


class Item extends React.Component {
  render() {
    return (
      <div className="c-featured-jobs-item">
        <a href="/" className="flex-container">
          <div className="c-featured-jobs-item-logo">
            <img src={require( `../../image/${this.props.logo}.png` )} className="c-featured-jobs-item-logo__image"/>
          </div>
          <div className="c-featured-jobs-item-body">
            <p className="c-featured-jobs-item-body__title">{this.props.title}</p>
            <p className="c-featured-jobs-item-body__meta">{this.props.office}, {this.props.location}</p>
          </div>
        </a>
      </div>
    );
  };

  static propTypes = {
    logo: PropTypes.string,
    title: PropTypes.string,
    office: PropTypes.string,
    location: PropTypes.string,
  };
};

export default Item;