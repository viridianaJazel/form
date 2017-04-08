import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

class Input extends Component {

  constructor(props) {
    super(props);

    this.size = this.props.size || 12;
  }


  render() {
    return (
      <Col md={this.size}>
        <FormGroup
          controlId="formBasicText"
          validationState={this.props.error.status}
        >
          <ControlLabel>
            {this.props.label}
            <span className="help-text">
              {this.props.helpText}
            </span>
          </ControlLabel>
          <FormControl
            type={this.props.type}
            value={this.props.value}
            name={this.props.name}
            onChange={this.props.onChange}
            className={this.props.className}
            onBlur={this.props.validate}
          />
          <FormControl.Feedback />
            <HelpBlock>{this.props.error.message}</HelpBlock>
          </FormGroup>
      </Col>
    );
  }
}

export default Input
