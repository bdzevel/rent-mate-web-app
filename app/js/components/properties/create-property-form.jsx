import React from 'react';

import LabelledInput from '../forms/labelled-input';

import propertyService from '../../services/property-service';
import notificationService from '../../services/notification-service';

class CreatePropertyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.initHandlers();
  }

  initHandlers() {
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(fieldName) {
    return function(e) {
      this.setState({ [fieldName]: e.target.value });
    }.bind(this);
  }

  canSubmit() {
    return !!this.state.name && !!this.state.description
      && !!this.state.addressLine1 && !!this.state.addressCity
      && !!this.state.addressRegion && !!this.state.addressPostalCode
      && !!this.state.addressCountry;
  }

  handleSubmit() {
    if (!this.canSubmit()) {
      return;
    }
    const props = {
      name: this.state.name,
      description: this.state.description,
      address: {
        line1: this.state.addressLine1,
        line2: this.state.addressLine2,
        city: this.state.addressCity,
        region: this.state.addressRegion,
        postalCode: this.state.addressPostalCode,
        country: this.state.addressCountry,
      },
    };
    propertyService.create(props)
      .catch(err => notificationService.push(`Error: ${err.message}`, 'error'));
  }

  render() {
    return (
      <div className="create-property-form">
        <hr />
        <LabelledInput id="name" label="Friendly Name" type="text" value={this.state.name} onChange={this.handleChange('name')} />
        <hr />
        <LabelledInput id="description" label="Description" type="textarea" value={this.state.description} onChange={this.handleChange('description')} />
        <hr />
        <h3>Address</h3>
        <LabelledInput id="addressLine1" label="Line 1" type="text" value={this.state.addressLine1} onChange={this.handleChange('addressLine1')} />
        <LabelledInput id="addressLine2" label="Line 2" type="text" value={this.state.addressLine2} onChange={this.handleChange('addressLine2')} />
        <LabelledInput id="addressCity" label="City" type="text" value={this.state.addressCity} onChange={this.handleChange('addressCity')} />
        <LabelledInput id="addressRegion" label="State" type="text" value={this.state.addressRegion} onChange={this.handleChange('addressRegion')} />
        <LabelledInput id="addressPostalCode" label="Postal Code" type="text" value={this.state.addressPostalCode}
          onChange={this.handleChange('addressPostalCode')} />
        <LabelledInput id="addressCountry" label="Country" type="text" value={this.state.addressCountry} onChange={this.handleChange('addressCountry')} />
        <hr />
        <button onClick={this.handleSubmit}>Create</button>
      </div>
    );
  }
}

export default CreatePropertyForm;
