import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = ({ data }) => {


    return (
        <div className="col-md-4 mt-4">
            <div className="card">
                <img className="img-fluid" src={data.img} alt="" />
                <div className="card-body">
                    <h6>{data.name}<span className="text-danger" style={{ float: 'right' }}>{data.Price}</span></h6>
                    <p className="text-muted">{data.desc}</p>
                    <Link to={`car/${data._id}`}> <button className="btn btn-danger">Buy Now</button></Link>

                </div>
            </div>
        </div>
    );
};

export default ProductDetail;