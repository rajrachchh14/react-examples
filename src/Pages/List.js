import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function List() {
  // const [user, setsUser] = useState([]);

  useEffect(() => {
    // fetch('Api/File.json').then(data => {

    fetch('https://json-server-azq8ss--3000.local.webcontainer.io/posts').then(
      result => {
        result.json().then(response => {
          console.log(response);
          // setsUser(response.data);
        });
      }
    );
  }, []);

  return (
    <>
      <h1>list</h1>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* <tbody>
                {user
                  ? user.map((item, i) => (
                      <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.image}</td>
                        <td>
                          <Link to={'/update/' + item.id}>Edit</Link>
                        </td>
                      </tr>
                    ))
                  : 'else'}
              </tbody> */}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
