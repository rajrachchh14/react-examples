import React from 'react';
// import './style.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Detail from './Pages/Detail';
import Home from './Pages/Home';
import List from './Pages/List';
import Search from './Pages/Search';
import Create from './Pages/Create';
import Topbar from './Pages/Topbar';
import Update from './Pages/Update';

export default function App() {
  return (
    <>
      <Router>
        <Topbar />

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/list">
          <List />
        </Route>

        <Route path="/detail">
          <Detail />
        </Route>

        <Route path="/search">
          <Search />
        </Route>

        <Route path="/create">
          <Create />
        </Route>
        <Route path="/update/:id" render={props => <Update {...props} />} />
      </Router>
    </>
  );
}
// https://dp7z9.csb.app/
// fetch("https://reqres.in/api/users?page=2").then(()=>{})
// res.json().then(()=>{})
// https://apitesting78.000webhostapp.com/data.json
