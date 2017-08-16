import React from 'react';
import PropTypes from 'prop-types';

import propertyService from '../../services/property-service';
import notificationService from '../../services/notification-service';

class UploadImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.initHandlers();
  }

  initHandlers() {
    this.trackInputRef = this.trackInputRef.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  trackInputRef(element) {
    this.filesInput = element;
  }

  canSubmit() {
    return this.filesInput && this.filesInput.files
      && this.filesInput.files.length;
  }

  handleSubmit() {
    if (!this.canSubmit()) {
      return;
    }
    propertyService.uploadPictures(this.props.propertyId, this.filesInput.files)
      .then(() => {
        this.filesInput.value = '';
      })
      .catch(err => notificationService.push(`Error: ${err.message}`, 'error'));
  }

  render() {
    return (
      <div className="upload-image-form">
        <hr />
        <label htmlFor="image">Image:</label> <input id="image" type="file" ref={this.trackInputRef} />
        <hr />
        <button onClick={this.handleSubmit}>Upload</button>
      </div>
    );
  }
}

UploadImageForm.propTypes = {
  propertyId: PropTypes.string.isRequired,
};

export default UploadImageForm;
