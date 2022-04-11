import "./AddUser.css";
import { useRef } from "react";
import Button from "../button/Button";

const AddUser = (props) => {
  const userName = useRef();
  const userAge = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enterdNameRef = userName.current.value;
    const enterdAgeRef = userAge.current.value;
    if (enterdNameRef.length !== 0 && +enterdAgeRef > 0)
      props.onAddUser({ name: enterdNameRef, age: enterdAgeRef });
    else {
      if (enterdNameRef.length === 0) {
        props.onErrorInput(true, "you did not enter a name");
      } else if (+enterdAgeRef <= 0)
        props.onErrorInput(true, "you did not enter a valid age");
    }
    userName.current.value = "";
    userAge.current.value = "";
  };

  return (
    <div className="form-container">
      <form id="form" onSubmit={submitFormHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" ref={userName} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" ref={userAge} />
        <div className="submit-button">
          <Button text={"Add User"} id="addUser" type="submit"></Button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
