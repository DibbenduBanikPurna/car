import React, { useEffect, useState } from 'react';
import Form from '../Form';
import { useParams } from 'react-router';
const SingleCar = () => {
    const { id } = useParams()
    const [singleData, setSingleData] = useState({})
    //console.log(id)
    useEffect(() => {
        fetch(`http://localhost:5000/getSingleCar/${id}`)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setSingleData(data);
            })
    }, [id])
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <img className="img-fluid" src={singleData.img} alt="" />
                    <h6>{singleData.name}<span className="text-danger" style={{ float: 'right' }}>{singleData.rice}</span></h6>
                    <p className="text-muted">{singleData.desc}</p>
                </div>
            </div>
            <div className="col-md-6">
                <Form />
            </div>

        </div>
    );
};

export default SingleCar;