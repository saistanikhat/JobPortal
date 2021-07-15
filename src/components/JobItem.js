import React, { useContext, useRef } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import JobsContext from '../context/jobs';

const JobItem = (props) => {
  const { onItemClick } = useContext(JobsContext);

  const {
    id,
    type,
    created_at,
    company,
    location,
    title,
    company_logo,
    index
  } = props;

  return (
    <div className="job-item" index={index + 1} onClick={() => onItemClick(id)}>
      <div className="job-info">
        <div className="job-title">{title}</div>
        <div className="job-location">
          {location} | {type}
        </div>
        <div className="company-name">{company}</div>
      </div>
      <div className="post-info">
        <div className="post-time">
          Posted {moment(new Date(created_at)).fromNow()}
        </div>
      </div>
    </div>
  );
};

JobItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company_logo: PropTypes.string,
  index: PropTypes.number.isRequired
};

export default JobItem;
