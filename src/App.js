import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid, Row, Col} from 'react-bootstrap';
import Form from './form/form.js';

class App extends Component {

  render() {

    var formBilling = {
      title:'Actualiza tu información de pago',
      button:{
        label:'Actualizar forma de pago',
        onSubmit: (event, values) => {
          event.preventDefault();
          console.log('values', values);
        }
      },
      fields:[{
          name:'name',
          label:'Nombre',
          type:'text',
          helpText:'Debe coincidir con la tarjeta',
          size:6,
          validate: value =>{
            var isValid = {status:'success', message:''};
            return isValid;
          }
        },{
          name:'lastname',
          label:'Apellido',
          type:'text',
          helpText:'Debe coincidir con la tarjeta',
          size:6,
          validateOnChange:value => {
            var isValid = {status:'success', message:''};
            return isValid;
          }
        },,{
          name:'card',
          label:'Número de tarjeta',
          type:'number',
          helpText:'',
          validateOnChange:value => {
            var isValid = {status:'success', message:''};
            return isValid;
          }
        },{
          name:'expireMonth',
          label:'Fecha de vencimiento',
          type:'select',
          options:[
            {label:'Ene (01)', value:'1'},
            {label:'Feb (02)', value:'2'},
            {label:'Mar (03)', value:'3'},
            {label:'Abr (04)', value:'4'},
            {label:'May (05)', value:'5'},
            {label:'Jun (06)', value:'6'},
            {label:'Jul (07)', value:'7'},
            {label:'Ago (08)', value:'8'},
            {label:'Sept (09)', value:'9'},
            {label:'Oct (10)', value:'10'},
            {label:'Nov (11)', value:'11'},
            {label:'Dic (12)', value:'12'},
          ],
          helpText:'Mes',
          size:4,
          validateOnChange:value => {
            var isValid = {status:'success', message:''};
            return isValid;
          }
        },{
          name:'expireYear',
          label:'',
          type:'select',
          options:[
            {label:'2017', value:'2017'},
            {label:'2018', value:'2018'},
            {label:'2019', value:'2019'},
            {label:'2020', value:'2020'},
            {label:'2021', value:'2021'},
            {label:'2022', value:'2022'},
            {label:'2023', value:'2023'},
            {label:'2024', value:'2024'},
            {label:'2025', value:'2025'},
            {label:'2026', value:'2026'},
            {label:'2027', value:'2027'},
            {label:'2028', value:'2028'},
          ],
          helpText:'Año',
          size:3,
          validateOnChange:value => {
            var isValid = {status:'success', message:''};
            return isValid;
          }
        },{
          name:'code',
          label:'Código de seguridad',
          type:'number',
          helpText:'',
          size:3,
          validate: value => {
            var isValid = {status:'success', message:''};

            if(value.length != 3){
              isValid.status = 'error';
              isValid.message = 'El codigo de seguridad debe tener de 3 digitos';
            }
            return isValid;
          }
        }

      ]
    }

    var formLogin = {
      title:'Inicia Sesion',
      button:{
        label:'Inicia sesion',
        onSubmit: (event, values) => {
          event.preventDefault();
          console.log('values', values);
        }
      },
      fields:[{
          name:'email',
          label:'Correo electrónico',
          type:'email',
          helpText:'',
          validate: value =>{

            var isValid = {status:'success', message:''};
            var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!regex.test(value)){
              isValid.status = 'error';
              isValid.message = 'El correo electrónico no tiene un formato valido';
            }
            return isValid;
          }
        },{
          name:'password',
          label:'Contraseña',
          type:'password',
          helpText:'',
          validateOnChange:value => {
            var isValid = {status:'success', message:''};

            if(value.length < 8){
              isValid.status = 'error';
              isValid.message = 'La contraseña debe tener al menos 8 digitos';
            }

            return isValid;
          }
        }
      ]
    }

    return (
      <div className="App">
        <div className="App-header">
          <h2>Formularios Personalizables</h2>
        </div>
        <Grid>
          <Row>
            <Col md={8} mdOffset={2}>

            <Form
              title={formLogin.title}
              actionLabel={formLogin.button.label}
              onSubmit={formLogin.button.onSubmit}
              fields={formLogin.fields}
            />

            <Form
              title={formBilling.title}
              actionLabel={formBilling.button.label}
              onSubmit={formBilling.button.onSubmit}
              fields={formBilling.fields}
            />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
