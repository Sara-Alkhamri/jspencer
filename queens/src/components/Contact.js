import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

function Contact({ values, errors, touched, isSubmitting }) {
    return (
    <div>
        <h4>We'd love to hear from you! Please share your thoughts using the form below.</h4>
    
        <Form className="contact-form">
            <Field className="field" component="input" type="text" name="name" placeholder="Enter Name" />
            {touched.name && errors.name && (
                    <p className="error">{errors.name}</p>
                )}
            <Field className="field" component="input" type="text" name="email" placeholder="Enter Email" />
            {touched.email && errors.email && (
                    <p className="error">{errors.email}</p>
                )}
            <Field className="field" component="input" type="text" name="message" placeholder="Enter Message" />
            {touched.message && errors.message && (
                    <p className="error">{errors.message}</p>
                )} 

            <Field className="How" component="select" type="text" name="How">
                <option>How did you find us?</option>
                <option value="dev">Instegram</option>
                <option value="ux">Search</option>
                <option value="tl">Word of mouth</option>
                </Field>
                {touched.how && errors.how && (
                    <p className="error">{errors.how}</p>
                )}       
                <button type="submit" disabled={isSubmitting}>Submit</button>
       
        </Form>    
    </div>    
    )
}

const formikHOC = withFormik ({
    mapPropsToValues({ name, email, message, how }) {
        return {
            name: name || "",
            email: email || "",
            message: message || "",
            how: how || ""
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
        .required("Name is required"),

        email: Yup.string()
        .required("Email is required"),

        message: Yup.string()
        .required("Message is required"),

    }),

    handleSubmit(values, {setStatus, resetForm}) {
        // axios
        //     .post("https://reqres.in/api/users/", values)
        //     .then(response => {
        //         console.log("handelSubmit: then: response: ", response);
        //         setStatus(response.data);
        //         resetForm();
        //     })
        //     .catch (error => console.log("handelSubmit: then: error: ", error))
        resetForm()
    }
        
})

const NewFormWithFormik = formikHOC(Contact);
export default NewFormWithFormik;