import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import Input from './fields/Input';
import Select from './fields/Select';

class Form extends Component {

  constructor(props) {
    super(props);

    this.title = this.props.title || 'Formulario';
    this.onSubmit = this.props.onSubmit;
    this.actionLabel = this.props.actionLabel || 'ok';
    this.fields = this.props.fields || [];
    this.noError = {status:null,message:''}

    //intialize state
    this.state = {
      'formData': {},
      'errors':{}
    };
  }

  handleChange(field, event) {
    var formData = this.state.formData;
    formData[event.target.name] = event.target.value;
    this.setState({ 'formData': formData });

    //si el campo tiene validacion por cada cambio
    if(field.validateOnChange){
      this.validate(field.name, field.validateOnChange);
    }

  }

  getValue(key) {
    return this.state.formData[key] || '';
  }

  getErrors(key) {
    return this.state.errors[key] || this.noError;
  }

  manageErrors(key, error){

    var errors = this.state.errors;
    if(!errors[key]){
      errors[key]={};
    }

    errors[key] = {status: error.status, message:error.message};
    this.setState({ 'errors': errors });
  }

  validate(key, validateFn) {

    if(validateFn){
      this.manageErrors(key, validateFn(this.state.formData[key]))
    }
  }

  getInputClass(key){
    return 'input-'+key;
  }

  getField(field){
    var htmlField = '';

    switch(field.type) {
      case 'select':
        htmlField = (
          <Select
            key={field.name}
            className={this.getInputClass(field.name)}
            label={field.label}
            name={field.name}
            options={field.options}
            onChange={this.handleChange.bind(this, field)}
            validate={this.validate.bind(this, field.name, field.validate)}
            helpText={field.helpText}
            size={field.size}
            error={this.getErrors(field.name)}
          />)
          break;
      case 'textarea':
          htmlField = ''
          break;
      default:
        htmlField = (
          <Input
            key={field.name}
            className={this.getInputClass(field.name)}
            label={field.label}
            name={field.name}
            value={this.getValue(field.name)}
            type={field.type}
            onChange={this.handleChange.bind(this, field)}
            validate={this.validate.bind(this, field.name, field.validate)}
            helpText={field.helpText}
            size={field.size}
            error={this.getErrors(field.name)}
          />
        )
    }

    return htmlField;
  }

  render() {

    var fields = this.fields.map( field =>{
      return this.getField(field);
    });

    return (
      <form className="form-container">
        <h1>{this.title}</h1>
          <Row>
            {fields}
          </Row>
          <button
            className="btn"
            onClick={this.onSubmit.bind(this.state.formData)}>
            {this.actionLabel}
          </button>
      </form>
    );
  }
}

export default Form
