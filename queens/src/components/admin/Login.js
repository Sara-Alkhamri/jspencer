import React from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';

function Login({touched, errors}) {

    return (
        //The Form component from Formik takes care of the change-handling and state management for the form
      <div className="site-section" id="contact-section"> 
          <div className="container">
            <Form className="contact-form"> 
                <h3 className="sub-title mb-2 d-block">Admin Login</h3> 
                <div className="row mb-4">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <Field 
                            type="username" 
                            name="username" 
                            placeholder="username"
                            className="form-control"
                        />
                
                        {touched.username && errors.username && ( <p className="text-primary">{errors.username}</p>)}
                    </div>  
                    <div className="col-md-6">
                        <Field 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            className="form-control"
                        />
                        {touched.password && errors.password && <p className="title text-primary">{errors.password}</p>}
                    </div>  
                </div>
                <button type="submit" className="btn btn-primary btn-md">Login</button>
            </Form>
        </div>
      </div> 
    )
}

//Wiring the form up with Formik below. We do this by wrapping our login function inside the higher-order Formik component useing withFormik
const FormikLogin = withFormik({
    mapPropsToValues({ username, password }) {
      return {
        username: username || "",
        password: password || ""
      };
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
            .required("Required Field"),
      password: Yup.string()
            .required("Required Field")
    }),
    //You can use this to see the values
    handleSubmit(values, { props, resetForm }) {
        console.log(props)
     axios
        .post("https://jspencer-be.herokuapp.com/auth/login", values)
        .then(res => {
          console.log(res.data)
          localStorage.setItem('token', res.data.token);
          props.history.push('/dashboard'); //redirects to dashboard
          resetForm();
        })
        .catch(err => console.log(err.res));
    }
  })(Login);
//   console.log("This is the HOC", FormikLogin);
  
  export default FormikLogin;