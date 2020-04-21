import React from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup'

function Contact({touched, errors}) {
  return (
    <div className="site-section" id="contact-section">
      <div className="container">
        <Form className="contact-form">
        <div className="section-title text-center mb-5">
            <span className="sub-title mb-2 d-block">Get In Touch</span>
            <h2 className="title text-primary">Share Your Thoughts</h2>
          </div>
          <div className="row mb-4">
            <div className="col-md-6 mb-4 mb-md-0">
              <Field
              type="firstName" 
              name="firstName"
              className="form-control" 
              placeholder="First name"
              />
              {touched.firstName && errors.firstName && ( <p className="text-primary">{errors.firstName}</p>)}  
            </div>
            <div className="col-md-6">
              <Field 
              type="lastName" 
              name="lastName"
              className="form-control" 
              placeholder="Last name"
              />
              {touched.lastName && errors.lastName && ( <p className="text-primary">{errors.lastName}</p>)}  
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12">
              <Field 
              type="email" 
              name="email"
              className="form-control" 
              placeholder="Email"
              />
              {touched.email && errors.email && ( <p className="text-primary">{errors.email}</p>)}    
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12">
              <textarea
              className="form-control"
              type="message" 
              name="message" 
              id="" cols="30" rows="10" 
              placeholder="Message">
              {touched.message && errors.message && ( <p className="text-primary">{errors.message}</p>)}    
              </textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button type="submit" className="btn btn-primary btn-md">Send Message</button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

const FormikContact = withFormik({
  mapPropsToValues({firstName, lastName, email, message}) {
    return {
      firstName: firstName || '',
      lastName: lastName || '',
      email: email || '',
      message: message || ''
    };
  },

  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .required('Required Field'),
      lastName: Yup.string()
      .required('Required Field'),
      email: Yup.string()
      .required('Required Field'),
      message: Yup.string()
      .required()
  }),

  handleSubmit(values, {props, setStatus, resetForm}) {
    console.log(props)
    axios
    .post('https://jspencer-be.herokuapp.com/contact/submit', values)
    .then(res => {
        setStatus(res.data);
        props.history.push('/contact-confirmation');
        resetForm();
    })
    .catch(error => console.log(error.response));
}

})(Contact)

export default FormikContact;