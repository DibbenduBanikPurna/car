import React, { useState, useEffect } from 'react';

import ExploreDetail from './ExploreDetail';

const Explore = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allcar')
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                setData(data)
            })
    }, [])

    return (
        <div className="container">
            <div className="row">

                {
                    data.map((data) => {
                        return <ExploreDetail key={data.id} data={data} />
                    })
                }

            </div>

        </div>
    );
};

export default Explore;