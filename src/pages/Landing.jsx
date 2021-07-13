import React from 'react';
import Header from '../component/Header/index.jsx';
import FeaturedJobs from '../component/FeaturedJobs/index.jsx';
import Culture from '../component/Culture/index.jsx';
import Footer from '../component/Footer/index.jsx';

function Landing() {
  return (
    <div className="main">
      <Header />
      <FeaturedJobs />
      <Culture />
      <Footer />
    </div>
  );
};

export default Landing;