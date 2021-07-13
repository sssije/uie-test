import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';
import '../../index.scss';


class Item extends React.Component {
  constructor() {
    super();
    this.toggleDetail = this.toggleDetail.bind(this);
    this.state = {
      showDetail: false,
    };
  }

  toggleDetail() {
    this.setState({showDetail: !this.state.showDetail});
  }

  render() {
    return (
      <li className={`c-culture-item ${this.state.showDetail ? 'c-culture-item--active' : ''}`} onClick={this.toggleDetail}>
        <p className="c-culture-item__title">{this.props.title}</p>
        {this.state.showDetail &&
          <p className="c-culture-item__description">{this.props.description}</p>
        }
      </li>
    );
  };

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  };
};

export default Item;