import React, { useEffect, useContext } from 'react';
import JobsContext from '../context/jobs';

const JobDetails = () => {
  const { details, onResetPage } = useContext(JobsContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    type,
    title,
    description,
    location,
    company,
    company_url,
    company_logo,
    how_to_apply
  } = details;

  return (
    <div className="job-details">
      <div className="back-link">
        <a href="/#" onClick={onResetPage}>
          Back
        </a>
      </div>
      <div>
        {type} / {location}
      </div>
      <div className="main-section">
        <div className="left-section">
          <div className="title">{title}</div>
          <hr />
          <div
            className="job-description"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
        <div className="right-section">
          <div className="company-details">
            <h3>About company</h3>
            <div className="company-name">{company}</div>
            <a className="company-url" href={company_url}>
              {company_url}
            </a>
          </div>
          <div className="how-to-apply">
            <h3>How to apply</h3>
            <div dangerouslySetInnerHTML={{ __html: how_to_apply }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
