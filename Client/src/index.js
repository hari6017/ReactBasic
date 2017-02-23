import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.js';
import Register from './Register.js';
import {Router, Route,Link, browserHistory} from 'react-router';
export default class Basic extends React.Component{

constructor(){
super();
this.state = {'name':'reactstateex'};
this.check1=this.check1.bind(this);
}
check1()
{
return this.state.name;
}


render(){
return(
  <div>
<h1>Hello from React
{this.check1()}</h1>
<li><ul><Link to = '/Login'>Login</Link></ul>
      <ul><Link to = '/Register'>Register</Link></ul></li>

{this.props.children}
</div>

);
}

}


ReactDOM.render(<Router history = {browserHistory}>
                  <Route path = "/" component = {Basic} />
                  <Route path = "/Login" component = {Login} />
                  <Route path = "/Register" component = {Register} />
                </Router>,document.getElementById("start"));
