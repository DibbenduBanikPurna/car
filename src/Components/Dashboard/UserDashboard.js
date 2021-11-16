import React from 'react';

const UserDashboard = () => {
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
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default UserDashboard;