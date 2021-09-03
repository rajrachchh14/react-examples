import React from 'react';
import { useEffect, useState } from 'react'; // , useState
import { Link } from 'react-router-dom';
function List() {
  // const [user, setsUser] = useState([]);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://apitesting78.000webhostapp.com/api/Item')
      .then(res => res.json())
      .then(
        result => {
          // console.log(result);
          setIsLoaded(true);
          setItems(result);
        },

        error => {
          setIsLoaded(true);
          setError(error);
          // console.log(error);
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

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {items
                  ? items.map((item, i) => (
                      <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>

                        <td>
                          <Link to={'/update/' + item.id}>Edit</Link>
                        </td>
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
