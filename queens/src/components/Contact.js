import React from 'react';
// import { withFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios'

function Contact() {
    return (
    <div className="site-section" id="contact-section">
      <div className="container">
        <form method="post" action="mailto:s.alkhamri@gmail.com" className="contact-form">

          <div className="section-title text-center mb-5">
            <span className="sub-title mb-2 d-block">Get In Touch</span>
            <h2 className="title text-primary">Share Your Thoughts</h2>
          </div>

          <div className="row mb-4">
            <div className="col-md-6 mb-4 mb-md-0">
              <input type="text" className="form-control" placeholder="First name"/>
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Last name"/>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12">
              <input type="text" className="form-control" placeholder="Email"/>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12">
              <textarea className="form-control" name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
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

// const formikHOC = withFormik ({
//     mapPropsToValues({ name, email, message, how }) {
//         return {
//             name: name || "",
//             email: email || "",
//             message: message || "",
//             how: how || ""
//         };
//     },

//     validationSchema: Yup.object().shape({
//         name: Yup.string()
//         .required("Name is required"),

//         email: Yup.string()
//         .required("Email is required"),

//         message: Yup.string()
//         .required("Message is required"),

//     }),

    //Come back to this when it's time for DB work
    // handleSubmit(values, {setStatus, resetForm}) {
        // axios
        //     .post("https:localhost:4000/", values)
        //     .then(response => {
        //         console.log("handelSubmit: then: response: ", response);
        //         setStatus(response.data);
        //         resetForm();
        //     })
        //     .catch (error => console.log("handelSubmit: then: error: ", error))
        // resetForm()
//     }
        
// })

// const NewFormWithFormik = formikHOC(Contact);
export default Contact;