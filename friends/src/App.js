import React from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (  
      <div className="App">
        <div className='Nav'>
          <Link to='/login'>Login</Link>
          <Link to='/friends'>Friends</Link>
        </div>

       <Route path='/login' component={Login} />
       <PrivateRoute exact path='/friends' component={Friends} />
      </div>      
  
  );
}

export default App;
