import React from 'react';
import './index.scss';
import '../../index.scss';

import SectionTitle from '../SectionTitle/index.jsx';
import FeaturedJobsItem from './Item.jsx';

const jobsList = [
  {
    logo: 'job-1',
    title: 'Executive Assistant',
    office: 'Head office',
    location: 'Jakarta',
  }, {
    logo: 'job-2',
    title: 'DevOps Manager',
    office: 'Head office',
    location: 'Jakarta',
  }, {
    logo: 'job-3',
    title: 'Senior Frontend Engineer',
    office: 'Head office',
    location: 'Jakarta',
  }, {
    logo: 'job-4',
    title: 'UI/UX Designer',
    office: 'Head office',
    location: 'Jakarta',
  }, {
    logo: 'job-5',
    title: 'Back-end Developer',
    office: 'Head office',
    location: 'Jakarta',
  }, {
    logo: 'job-6',
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