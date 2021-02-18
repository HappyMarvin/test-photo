import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Users from "../Users/Users";
import User from "../User/User";
import Album from "../Album/Album";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"



function App() {
  return (
    <>
      <Header />
      <div className="main">
        <BrowserRouter>
          <Switch>
            <Route exact path="/user/:id" component={User} />
            <Route exact path="/album/:id" component={Album} />
            <Route exact path="/" component={Users} />
          </Switch>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  )
}

export default App;
