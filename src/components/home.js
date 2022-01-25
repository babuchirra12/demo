import React from 'react'
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import Server from './service'
import Client from './client'
function Home() {
    return ( 

    //     <Router>
    //     <Route exact path="/" component={Login} />
    //     <Route path="/Home" component={Home} />
    //   </Router>
    <div>
    <h1>React Router Example</h1>
    
     
    <div>
    <Router>
    <ul>
      <li><Link to="/client">Client Side</Link></li>
      <li><Link to="/server">Server Side</Link></li>
    </ul>
      <Route path='#'exact component={Client} />
      <Route path='/Server'exact  component={Server} />
      </Router>
    </div>
  
  </div>
    )
}

export default Home