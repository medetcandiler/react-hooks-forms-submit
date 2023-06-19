import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Error from "./Error";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submitted, setSubmitted ] = useState([]);
  const [errors, setErrors ] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formData = {
    //   firstName: firstName,
    //   lastName: lastName
    // }
    if(firstName.length > 0 && lastName.length > 0 ) {
      const formData = {
        firstName: firstName,
        lastName: lastName
      }
      setSubmitted(prev => [...prev, formData]);
      setErrors([])
      setFirstName('');
      setLastName('');
    }else {
      setErrors(['First name have to be filled!', 'lastn name have to be filled also!'])
      setTimeout(() => {
        setErrors([])
      },1000)
    }
    // const formData = {
    //   firstName: e.target[0].value,
    //   lastName: e.target[1].value
    // }
    // setSubmitted(prev => [...prev, formData])
    // setFirstName('')
    // setLastName('')
  }

  const toDisplaySubmittes = submitted.map(item => (
    <div key={uuidv4()}>{item.firstName}{item.lastName}</div>
  ))

  console.log(submitted)
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
      {errors.length > 0 && errors.map(error => <Error key={uuidv4()} error={error} />)}
      {toDisplaySubmittes}
    </form>
  );
}

export default Form;
