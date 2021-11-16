import React, { useEffect, useState } from 'react';

import ProductDetail from './ProductDetail';

const Product = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allcar')
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                setData(data.slice(0, 6))
            })
    }, [])

    console.log(data)
    return (
        <div className="container">
            <div className="row">
                {
                    data.map((data) => {
                        return <ProductDetail key={data._id} data={data} />
                    })
                }
            </div>
        </div>
    );
};

export default Product;