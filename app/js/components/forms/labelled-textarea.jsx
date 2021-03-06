import React from 'react';
import PropTypes from 'prop-types';

const LabelledInput = function(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <br />
      <textarea id={props.id} value={props.value} onChange={props.onChange} />
    </div>
  );
};

LabelledInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LabelledInput;
