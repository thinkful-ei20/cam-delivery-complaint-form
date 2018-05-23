import React from 'react';
import { reduxForm, Field } from 'redux-form';
import required from '../validators';
import Input from './input';
import '../form.css';

export class Form extends React.Component {
  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <div className="delivery-form">
        <h2>Report a problem with your delivery</h2>
        <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <label htmlFor="tracking-number">Tracking Number</label>
          <Field 
            name="tracking-number" 
            id="tracking-number" 
            type="text" 
            component={Input}
            validate={[required]}
          />
          <label htmlFor="issue">What is your issue?</label>
          <Field name="issue" id="issue" component="select">
            <option value="not-delivered">My delivery hasn't arrived</option>
            <option value="wrong-item">The wrong item was delivered</option>
            <option value="missing-part">Part of my order was missing</option>
            <option value="damaged">Some of my order arrived damaged</option>
            <option value="other">Other (give details below)</option>
          </Field>
          <div>
            <label htmlFor="details">Give more details (optional)</label>
            <Field name="details" id="details" component="textarea"></Field>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'contact'
})(Form)