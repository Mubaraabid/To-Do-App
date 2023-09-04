import React from "react";
import { useState } from "react";

const FormComponent = () => {
  const [Form, setForm] = useState({
    name:"",
    email:"",
    password:""
  });
  // const [email, setEmail] = useState('');
  // const [password, setPassword]= useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({...Form, [Form.name]:"", [Form.email]:"" , [Form.password]:"" });
    // setEmail("");
    // setPassword("");
  }


  

  return (
    <div>
     <div>
      <h1> Form </h1>
      <fieldset>
      <legend> User information </legend>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={Form.name} onChange={(e) => setForm(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={Form.email} onChange={(e) => setForm(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input type="number" name="password" value={Form.password} onChange={(e) => setForm(e.target.value)}
          />
        </div>
       
        <button type="submit">Submit</button>
      </form>
      </fieldset>
      {/* <FormComponent name={name} email={email} password={password} /> */}
    </div>
      <div>
        <h2>Form Data</h2>
        <p>Name: {Form.name}</p>
        <p>Email: {Form.email}</p>
        <p>Password: {Form.password}</p>
      </div>
      </div>
    );

};
    
  

  export default FormComponent;