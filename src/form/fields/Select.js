import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

class Select extends Component {

  constructor(props) {
    super(props);

    this.size = this.props.size || 12;
  }


  render() {
    var options = this.props.options.map(option => {
      return (<option key={option.value} value={option.value}>{option.label}</option>)
    })

    return (
          <Col md={this.size}>
            <FormGroup controlId="formControlsSelect"
            validationState={this.props.error.status}
            >
              <ControlLabel>
                {this.props.label}
                <span className="help-text">
                  {this.props.helpText}
                </span>
              </ControlLabel>
              <FormControl componentClass="select" >
                {options}
              </FormControl>
              <FormControl.Feedback />
              <HelpBlock>{this.props.error.message}</HelpBlock>
            </FormGroup>

          </Col>
    );
  }
}

export default Select
