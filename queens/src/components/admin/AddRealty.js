import React from 'react';
import { axiosWithAuth } from 'axios'
import RealtyCard from '../RealtyCard'

function AdminRealty() {
    const [adminAdd, setAdminAdd] = useState();

    const AddHouse = () => {
        axiosWithAuth()
        .post('https://jspencer-be.herokuapp.com/realty/add')
        .then(res => {
            console.log(res)
            setAdminAdd(res.data)
        })
        .catch(err => console.log(err.res))
    };

    useEffect(() => {
        AddHouse()
    }, [])

    return(
        <div className="site-section" id="contact-section">
            <div className="container">
                <RealtyCard key={adminAdd.id} id={adminAdd.id} image={adminAdd.image} post={AddHouse} />
            </div>

        </div>
    )
    
}

export default AdminRealty;