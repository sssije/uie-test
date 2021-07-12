import React from 'react';
import './index.scss';
import '../../index.scss';

const navbarList = [
  {
    title: 'Life',
    url: '/',
  }, {
    title: 'Jobs',
    url: '/',
  }, {
    title: 'Tech',
    url: '/',
  }, {
    title: 'Event',
    url: '/',
  }
];

const list = navbarList.map(item => 
  <li className="c-navbar-item">
    <a className="c-navbar-item__link" href={item.url} target="_blank">{item.title}</a>
  </li>
);

class Nav extends React.Component {
  render () {
    return (
      <nav className="c-navbar">
        <ul className="c-navbar-list">{list}</ul>
      </nav>
    )
  };
};

export default Nav;