import React from 'react';

const MyOrder = () => {
    return (
        <div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Car Name</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>action</th>
                        <th>confirm</th>
                    </tr>

                </thead>
                <tbody>
                    {/* {
                        bookPerson.map((book) => {
                            return <ListDetail key={book._id} book={book} />
                        })
                    } */}
                    <tr>
                        <td>purna</td>
                        <td>purna.banik</td>
                        <td>bmw</td>
                        <td>17/4 mym</td>
                        <td>pending</td>
                        <td className="text-danger">Delete</td>
                        <td className="text-primary ">Pay Now</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;