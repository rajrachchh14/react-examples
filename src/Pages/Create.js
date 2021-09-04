import React, { useState } from 'react';

import axios from 'axios';

// import request from 'superagent';
// import axios from 'axios';

function Create() {
  let [title, SetName] = useState('');
  let [description, SetDescription] = useState('');
  // let [image, SetImage] = useState('');
  let [id, s] = useState('10');

  function Create() {
    let data = { title, description }; // , price, image
    console.log(data);

    // fetch('https://apitesting78.000webhostapp.com/api/Item');
    // fetch('https://apitesting78.000webhostapp.com/api/Item', {
    //   credentials: 'include',
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // })
    //   .then(result => console.log('success====:', result))
    //   .catch(error => console.log('error============:', error));

    // request
    //   .post('https://apitesting78.000webhostapp.com/data.json')
    //   // .set('Content-Type', 'application/x-www-form-urlencoded')
    //   .set('Content-Type', 'application/json')
    //   .send({ id, name: 'username', price: 'password', image: 'ss' })
    //   .send({ data })
    //   .end(function(err, res) {
    //     console.log(res);
    //   });

    axios
      .post('https://apitesting78.000webhostapp.com/api/Item/', {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Method': 'POST',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control':
            'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0'
        },
        body: JSON.stringify({
          // data
          title: 'ee',
          description: 'pp'
          // price: 'yourOtherValue',
          // image: 'yourOtherValue'
        })
      })
      .then(result => {
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
              value={title}
            />
            <br />
            {/* <input
              type="text"
              className="form-control"
              placeholder="Price"
              onChange={e => SetPrice(e.target.value)}
              value={price}
            /> */}
            <br />
            {/* <input
              type="text"
              className="form-control"
              placeholder="image"
              onChange={e => SetImage(e.target.value)}
              value={image}
            /> */}
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
