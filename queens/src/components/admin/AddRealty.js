import React from 'react';
import { axiosWithAuth } from 'axios'

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
    
}

export default AdminRealty;