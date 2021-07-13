import React from 'react';
import PropTypes from 'prop-types';
import cultureImage from '../../image/culture-img-1.png'

import './index.scss';
import '../../index.scss';

import SectionTitle from '../SectionTitle/index.jsx';
import CultureItem from './Item.jsx';

const list = [
  {
    title: 'Result Oriented',
    description: 'Bersemangat tinggi untuk memelajari bisnis, teknologi, dan karakter pasar demi mendapatkan kepercayaan pengguna. Kami menciptakan inovasi berdasarkan data, riset, dan analisa.',
  }, {
    title: 'Ownership',
    description: 'Bersemangat tinggi untuk memelajari bisnis, teknologi, dan karakter pasar demi mendapatkan kepercayaan pengguna. Kami menciptakan inovasi berdasarkan data, riset, dan analisa.',
  }, {
    title: 'Curiosity',
    description: 'Bersemangat tinggi untuk memelajari bisnis, teknologi, dan karakter pasar demi mendapatkan kepercayaan pengguna. Kami menciptakan inovasi berdasarkan data, riset, dan analisa.',
  }, {
    title: 'Keep the Passion Alive',
    description: 'Bersemangat tinggi untuk memelajari bisnis, teknologi, dan karakter pasar demi mendapatkan kepercayaan pengguna. Kami menciptakan inovasi berdasarkan data, riset, dan analisa.',
  }, {
    title: 'Speed',
    description: 'Bersemangat tinggi untuk memelajari bisnis, teknologi, dan karakter pasar demi mendapatkan kepercayaan pengguna. Kami menciptakan inovasi berdasarkan data, riset, dan analisa.',
  },
];

const cultureList = list.map((item, id) => 
  <CultureItem key={id} title={item.title} description={item.description} />
);

class Culture extends React.Component {
  render() {
    return (
      <section className="c-culture o-container-inner">
        <div className="c-culture-header">
          <SectionTitle title="Our Rocks Culture" />
        </div>
        <div className="c-culture-content">
          <div className="flex-container flex-container--wrap flex-container--space-between">
            <ul className="c-culture-list">
              {cultureList}
            </ul>
            <div className="c-culture-image-container">
              <img className="c-culture-image" src={cultureImage} />
            </div>
          </div>
        </div>
      </section>
    );
  };

  static propTypes = {
    title: PropTypes.string,
  };
};

export default Culture;