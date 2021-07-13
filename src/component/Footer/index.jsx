import React from 'react';
import './index.scss';
import '../../index.scss';

const list = [
  {
    text: 'Tentang Kami',
    url: '/',
  }, {
    text: 'Hubungi Kami',
    url: '/',
  }, {
    text: 'Pelayanan pemberi pinjaman',
    url: '/',
  }, {
    text: 'Cara Kerja',
    url: '/',
  }, {
    text: 'Karir',
    url: '/',
  }, {
    text: 'Syarat dan Ketentuan',
    url: '/',
  }, {
    text: 'Dampak Sosial',
    url: '/',
  }, {
    text: 'FAQs',
    url: '/',
  }, {
    text: 'Blog Amartha',
    url: '/',
  },
];

const linkList = list.map((item, id) => 
  <li key={id} className="c-footer-link-item">
    <a className="c-footer-link-item__text" href={item.url}>{item.text}</a>
  </li>
);
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="o-container">
          <div className="flex-container flex-container--space-between">
            <ul className="c-footer-link-list flex-container flex-container--space-between flex-container--wrap">
              {linkList}
            </ul>
            <div className="c-footer-contact">
              <p className="c-footer-contact__company">PT. Amartha Mikrofintek</p>
              <p className="c-footer-contact__detail">Jl. Ampera Raya No.16 Jakarta Selatan, Indonesia 12560
                <br />
                Office: +62 21 2271 5353
                <br />
                Customer Support: +62 21 39509966
                <br />
                support@amartha.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;