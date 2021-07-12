import React from 'react';
import Header from '../component/Header/index.jsx';
import FeaturedJobs from '../component/FeaturedJobs/index.jsx';


function Landing() {
  return (
    <div className="main">
      <Header />
      <FeaturedJobs />
    </div>
  );
};

export default Landing;