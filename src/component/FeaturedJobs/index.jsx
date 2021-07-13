import React from 'react';
import './index.scss';
import '../../index.scss';

import SectionTitle from '../SectionTitle/index.jsx';
import FeaturedJobsItem from './Item.jsx';

const jobsList = [
  {
    logo: '/Users/bukalapak/Personal/Test/uie-test/src/image/job-1.png',
    title: 'Executive Assistant',
    office: 'Head office',
    location: 'Jakarta',
  }, {
    logo: '/Users/bukalapak/Personal/Test/uie-test/src/image/job-1.png',
    title: 'DevOps Manager',
    office: 'Head office',
    location: 'Jakarta',
  }, {
    logo: '/Users/bukalapak/Personal/Test/uie-test/src/image/job-1.png',
    title: 'Senior Frontend Engineer',
    office: 'Head office',
    location: 'Jakarta',
  }, {
    logo: '/Users/bukalapak/Personal/Test/uie-test/src/image/job-1.png',
    title: 'UI/UX Designer',
    office: 'Head office',
    location: 'Jakarta',
  }, {
    logo: '/Users/bukalapak/Personal/Test/uie-test/src/image/job-1.png',
    title: 'Back-end Developer',
    office: 'Head office',
    location: 'Jakarta',
  }, {
    logo: '/Users/bukalapak/Personal/Test/uie-test/src/image/job-1.png',
    title: 'Mobile Developer',
    office: 'Head office',
    location: 'Jakarta',
  },
];

const featuredJobsList = jobsList.map((item, id) => 
  <FeaturedJobsItem key={id} logo={item.logo} title={item.title} office={item.office} location={item.location}  />
);

class FeaturedJobs extends React.Component {
  render() {
    return (
      <section className="c-featured-jobs o-container-inner">
        <div className="c-featured-jobs-header">
          <div className="flex-container flex-container--space-between">
            <SectionTitle title="Featured Jobs" />
            <a className="c-featured-jobs-header-link" href="/">View All Jobs</a>
          </div>
        </div>
        <div className="c-featured-jobs-content">
          <div className="flex-container flex-container--wrap flex-container--space-between">
            {featuredJobsList}
          </div>
        </div>
      </section>
    );
  }
};

export default FeaturedJobs;