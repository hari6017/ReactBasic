import React from 'react';

export default class Register extends React.Component{

formSubmit() {
  var obj1 = {fname : document.Register.fname.value,
            lname : document.Register.lname.value,
            date : document.Register.date.value,
            Gender : document.Register.group1.value,
            Status : document.Register.status.value
          }
          console.log(obj1);

           $.post("/register",obj1);
}


  render()
  {
    return(
      <div>
        <form name = "Register">
          FirstName : <input type = "text" name = "name" id = "fname"/><br/>
          LastName :  <input type = "password" name = "pass" id = "lname"/><br/>
          DateOfBirth : <input type = "date" name = "date" id = "date"/><br/>
          <input type="radio" name="group1" value="M" /> Male<br />
          <input type="radio" name="group1" value="F"  /> Female<br />
          Status : <select name="status">
               <option value="Employee">Employee</option>
              <option value="UnEmployee">Un Employee</option>

</select>
  <input type ="button" onClick = {this.formSubmit} />
        </form>
      </div>

    );
  }
}
