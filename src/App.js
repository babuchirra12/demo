import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import Home from './components/home'
//import { render } from 'react-dom';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import {  Redirect } from 'react-router'
import { useState } from 'react';
import Server from './components/service'
import Client from './components/client'
function App(props) {
  const [loggedIn, setLoggedIn] = useState({loginstatus:props.status})
  const handleClick = () =>{
    setLoggedIn(true)
  }
  return (
    <div className="App">
      {/* <Login/> */}
  {/* <Home/> */}
     {/* <Router>
    <Route exact path="/" component={Login} />
    <Route path="/Home" component={Home} />
  </Router> */}
  
  {loggedIn ? (
   <div>
     <Router>
     <ul>
      <li><Link to="/client">Client Side</Link></li>
      <li><Link to="/server">Server Side</Link></li>
      <li><Link to="/">Home</Link></li>
    </ul>
     <Route path='/client' exact component={Client} />
     <Route path='/'exact component={Home} />
      <Route path='/Server'exact  component={Server} />
      </Router>
   </div>
  ) : (
    <Login handleClick={handleClick}/>
  )
  }
    </div>
  );
}

export default App;
