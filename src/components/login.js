import React from 'react';
//import { useHistory } from "react-router-dom";
//import { withRouter } from "react-router-dom";
import Home from './home'

function Login(props) {
  //  const history = useHistory();
  const handleClick = () =>{
  //history.push('/Home');
 // window.location.href="/Home"
    //history.push('/home'); //eg.history.push('/login');
  }
    return (
        <button type="button" onClick={props.handleClick}>
      Go home
    </button>
    )
}

export default Login;