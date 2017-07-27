import React from 'react';
import PropTypes from 'prop-types';

import LabelledTextarea from './labelled-textarea';
import LabelledCheckbox from './labelled-checkbox';

const LabelledInput = function(props) {
  if (props.type === 'textarea') {
    return <LabelledTextarea id={props.id} label={props.label} value={props.value} onChange={props.onChange} />;
  } else if (props.type === 'checkbox') {
    return <LabelledCheckbox id={props.id} label={props.label} checked={props.value} onChange={props.onChange} />;
  }
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>&nbsp;
      <input id={props.id} type={props.type} value={props.value} onChange={props.onChange} />
    </div>
  );
};

LabelledInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LabelledInput;
