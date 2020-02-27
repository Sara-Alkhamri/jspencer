import React from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';

function Login({touched, errors}) {

    return (
        //The Form component from Formik takes care of the change-handling and state management for the form
        <Form> 
         <h3 className="title text-primary">Admin Login</h3> 
        <Field 
            type="username" 
            name="username" 
            placeholder="username"
         />
        {touched.username && errors.username && ( <p className="error">{errors.username}</p>)}

        <Field 
            type="password" 
            name="password" 
            placeholder="Password" 
        />
        {touched.password && errors.password && <p className="error">{errors.password}</p>}
        
         <button type="submit">Login</button>
      </Form>
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
        // console.log(values)
     axios
        .post("https://jspencer-be.herokuapp.com/auth/login", values)
        .then(res => {
          console.log(res.data)
          localStorage.setItem('token', res.data.token);
          props.history.push('/dashboard');
          resetForm();
        })
        .catch(err => console.log(err.res));
    }
  })(Login);
//   console.log("This is the HOC", FormikLogin);
  
  export default FormikLogin