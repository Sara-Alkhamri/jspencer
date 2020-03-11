import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'

function Contact() {
    return (
    <div className="site-section" id="contact-section">
      <div className="container">
        <form method="post" className="contact-form">

          <div className="section-title text-center mb-5">
            <span className="sub-title mb-2 d-block">Get In Touch</span>
            <h2 className="title text-primary">Share Your Thoughts</h2>
          </div>

          <div className="row mb-4">
            <div className="col-md-6 mb-4 mb-md-0">
              <input 
              type="text" 
              className="form-control" 
              placeholder="First name"
              />
            </div>
            <div className="col-md-6">
              <input 
              type="text" 
              name="firstName"
              className="form-control" 
              placeholder="Last name"
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12">
              <input 
              type="text" 
              name="lastName"
              className="form-control" 
              placeholder="Email"/>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12">
              <textarea 
              className="form-control" 
              name="message" 
              id="" cols="30" rows="10" 
              placeholder="Message">
              </textarea>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <button type="submit" className="btn btn-primary btn-md">Send Message</button>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

const formikHOC = withFormik ({
    mapPropsToValues({ firstName, lastName, email, message }) {
        return {
            firstName: firstName || "",
            lastName: lastName || "",
            email: email || "",
            message: message || "",
        };
    },

    validationSchema: Yup.object().shape({
        firstName: Yup.string()
        .required("First name is required"),
      
        lastName: Yup.string()
        .required("Last name is required"),

        email: Yup.string()
        .required("Email is required"),

        message: Yup.string()
        .required("Message is required"),

    }),

    //Come back to this when it's time for DB work
    handleSubmit(values, {props, setStatus, resetForm}) {
      console.log(props)
        axios
            .post("https://jspencer-be.herokuapp.com/contact/submit", values)
            .then(res => {
              console.log(res.data)
                // console.log("handelSubmit: then: response: ", response);
                setStatus(res.data);
                props.history.push('/contact-confirmation');
                resetForm();
            })
            .catch (error => console.log("handelSubmit: then: error: ", error))
    }    
})(Contact);


export default formikHOC;