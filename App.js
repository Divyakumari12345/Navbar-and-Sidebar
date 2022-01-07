import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Appbar from './comp/Appbar';

function App() {
  return (
    
    <>
    <Appbar />
      <Router>
        <Navbar />
        <Switch>
          <Route path='/'  />
          <Route path='/reports'  />
          <Route path='/products' />
        </Switch>
      </Router>
    </>
  );
}

export default App;
