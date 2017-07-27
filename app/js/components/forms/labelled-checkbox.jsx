import React from 'react';
import PropTypes from 'prop-types';

const LabelledCheckbox = function(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>&nbsp;
      <input id={props.id} type="checkbox" checked={props.checked} onChange={props.onChange} />
    </div>
  );
};

LabelledCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LabelledCheckbox;
