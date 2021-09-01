import React, { useState } from 'react';
function Create() {
  let [name, SetName] = useState('');
  let [price, SetPrice] = useState('');
  let [image, SetImage] = useState('');

  function Create() {
    let data = { name, price, image };

    fetch('https://apitesting78.000webhostapp.com/create.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Access-Control-Request-Method': 'POST'
      },
      body: JSON.stringify({ name: name, price: price, image: image })
    }).then(result => {
      result.json().then(response => {
        console.log(response);
        console.log('insert');
      });
    });
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <h1>Create</h1>
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
              id="create"
              value="Create"
              className="btn btn-primary"
              onClick={Create}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Create;
