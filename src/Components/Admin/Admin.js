import React, { useState } from 'react';
import CarData from '../Data/Data';

const Admin = () => {
    const [data, setData] = useState(CarData)
    const handlepost = () => {
        fetch('http://localhost:5000/all', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(() => { console.log("data posted") })
    }
    return (
        <div>
            <button onClick={handlepost}>Post me</button>
        </div>
    );
};

export default Admin;