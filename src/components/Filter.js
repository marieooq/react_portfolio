import React from 'react';

const Filter = (props) => {
  return (
    <div>
      <select onChange={props.handleChange} value={props.project}>
        <option value="all">All projects</option>
        <option value="company">Company project</option>
        <option value="personal">Personal project</option>
      </select>
    </div>
  );
};

export default Filter;
