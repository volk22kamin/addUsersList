import "./AddUser.css";
import { useState } from "react";
import Button from "../button/Button";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (name.length !== 0 && +age > 0)
      props.onAddUser({ name: name, age: age });
    else {
      if (name.length === 0) {
        props.onErrorInput(true, "you did not enter a name");
      } else if (+age <= 0)
        props.onErrorInput(true, "you did not enter a valid age");
    }
    setAge("");
    setName("");
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="form-container">
      <form id="form" onSubmit={submitFormHandler}>
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          type="text"
          value={name}
          onChange={nameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={age} onChange={ageChangeHandler} />
        <div className="submit-button">
          <Button text={"Add User"} id="addUser" type="submit"></Button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
