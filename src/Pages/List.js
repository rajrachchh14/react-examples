import React from 'react';
import { useEffect } from 'react'; // , useState
// import { Link } from 'react-router-dom';
function List() {
  // const [user, setsUser] = useState([]);

  useEffect(() => {
    // fetch('https://json-server-azq8ss--8080.local.webcontainer.io/')
    //   .then(res => res.json())
    //   .then(
    //     result => {
    //       console.log(result);
    //     },

    //     error => {
    //       console.log(error);
    //     }
    //   );

    fetch('https://json-server--3000.local.webcontainer.io/posts', {
      credentials: 'include',
      // method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(result => console.log('success====:', result))
      .catch(error => console.log('error============:', error));
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
