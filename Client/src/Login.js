import React from 'react';

export default class Login extends React.Component{
  handlelogin () {
    var uname = document.Register.uname.value;
    var pass = document.Register.pass.value;
console.log(uname);
console.log(pass);
      $.ajax({
        url : '/login',
        method : 'post',
        data : {'uname' : uname, 'pass' : pass},

      })

  }

  render()
  {
    return(
      <form name = "Register">
        FirstName : <input type = "text" name = "uname" id = "uname"/><br/>
        LastName :  <input type = "password" name = "pass" id = "pass"/><br/>
        <button type="button" onClick = {this.handlelogin}>Login</button>
        </form>

    );
  }
}
