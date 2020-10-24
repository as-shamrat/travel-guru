import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PlaceDetail from './Component/PlaceDetail/PlaceDetail';
import Rooms from './Component/Rooms/Rooms';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

export const MyContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <MyContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/place/:placeName">
            <PlaceDetail></PlaceDetail>
          </Route>
          <PrivateRoute path="/room">
            <Rooms></Rooms>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
         
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
