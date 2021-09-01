import React from 'react';
import { useEffect, useState } from 'react';

function List() {
  const [user, setsUser] = useState([]);

  useEffect(() => {
    fetch(
      'https://apitesting78.000webhostapp.com/Api/select_all_products.php'
    ).then(data => {
      data.json().then(result => {
        //   console.log(result.data);
        setsUser(result.data);
      });
    });
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
                </tr>
              </thead>
              <tbody>
                {user
                  ? user.map((item, i) => (
                      <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.image}</td>
                      </tr>
                    ))
                  : 'else'}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
