import React, { useState, useEffect }from 'react';
import  {axiosWithAuth}  from '../utils/axiosWithAuth'
import axios from 'axios'
import RealtyCard from './RealtyCard'

const AdminRealty = () => {
    const [adminAdd, setAdminAdd] = useState([{}]);

    const getHouse = () => {
        axios
            .get('https://jspencer-be.herokuapp.com/realty/')
            .then(res => {
                console.log(res, 'res')
                setAdminAdd(res.data)
            })
            .catch(err => console.log(err.res))
    };

    useEffect(() => {
        getHouse();
    }, [])


    const AddHouse = () => {
        axiosWithAuth()
        .post('https://jspencer-be.herokuapp.com/realty/add')
        .then(res => {
            console.log(res.data)
            getHouse()
        })
        .catch(err => console.log(err.res))
    };

    // useEffect(() => {
    //     AddHouse()
    // }, [])

    return(
        <div className="site-section" id="contact-section">
            <div className="container">
            <input type="file" accept="image/*" multiple={false} />
                <RealtyCard key={adminAdd.id} id={adminAdd.id} image={adminAdd.image} post={AddHouse} /> 
            </div>
            

        </div>
    )
    
}

export default AdminRealty;