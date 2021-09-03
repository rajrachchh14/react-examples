import React, { useEffect, useState } from 'react';
function Update(props) {
  //
  // let id = props.match.params.id;
  let [name, SetName] = useState('');
  let [price, SetPrice] = useState('');
  let [image, SetImage] = useState('');

  {
    console.log(props.match.params.id);
  }

  // useEffect(() => {
  //   console.log(id);
  //   fetch(`Api/File.json/ + ${id}`).then(data => {
  //     // headers : {
  //     //   'Content-Type': 'application/json',
  //     //   'Accept': 'application/json'
  //     //  }
  //     data.json().then(result => {
  //       // console.log(result.data);
  //       console.log(result);
  //       // setsProduct(result.data);
  //     });
  //   });

  //   fetch('Api/File.json/' + id)
  //     .then(response => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then(data => {
  //       // Work with JSON data here
  //       console.log(data.data);
  //     })
  //     .catch(err => {
  //       // Do something for an error here
  //       console.log('Error Reading data ' + err);
  //     });
  // }, []);

  function Update() {}

  return (
    <>
      {/* {id} */}
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <h1>Update </h1>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={e => SetName(e.target.value)}
              value={name}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Price"
              onChange={e => SetPrice(e.target.value)}
              value={price}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="image"
              onChange={e => SetImage(e.target.value)}
              value={image}
            />
            <br />
            <input
              type="submit"
              id="update"
              value="Update"
              className="btn btn-primary"
              onClick={Update}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Update;
