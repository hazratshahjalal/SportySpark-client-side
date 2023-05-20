import React from 'react';
import { Link } from 'react-router-dom';

const MyToys = () => {
  return (
    <div className='mx-auto text-center bg-slate-100 rounded-lg py-12'>
      <h1 className="text-5xl font-semibold">All Toys</h1>
      <div className="overflow-x-auto bg-slate-50 my-12">
        <table className="table container  mx-auto my-12table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Toy Name</th>
              <th>Sub category</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td><Link to='/:id'><button className="btn btn-gray btn-md">Delete</button></Link> </td>
              <td><Link to='/:id'><button className="btn btn-gray btn-md">Edit</button></Link> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys; 