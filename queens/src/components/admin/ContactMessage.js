import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MessagesToReview = () => {
    const [message, setMessage] = useState();

    const getMessage = () => {
        axios
        .get('https://jspencer-be.herokuapp.com/contact/message')
        .then(res => {
            console.log(res);
            setMessage(res.data);
        })
        .catch(err => console.log(err.res))

    };

    useEffect(() => {
        getMessage()
    }, [])

return (
    <div>
        <h3>New Messages to Review:</h3>
    </div>
)





}


export default MessagesToReview;