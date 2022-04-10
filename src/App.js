import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser/AddUser";
// import ListItem from "./components/listItem/ListItem";
import List from "./components/list/List";
import Modal from "./components/modal/Modal";

const DUMMY_DATA = [
  {
    id: "1",
    name: "max",
    age: 31,
  },
  {
    id: "2",
    name: "tom",
    age: 29,
  },
  {
    id: "3",
    name: "volk",
    age: 24,
  },
];

function App() {
  const [users, setUsers] = useState(DUMMY_DATA);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const addUserHandler = (user) => {
    user = { ...user, id: Math.random().toString() };
    setUsers((prevState) => {
      return [user, ...users];
    });
  };

  const errorHandler = (errorState, message) => {
    setIsError(errorState);
    setErrorMessage(message);
  };

  const exitModalHandler = () => {
    setIsError(false);
  };

  const deleteItemHandler = (id) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id.toString() === id.toString()) {
        users.splice(i, 1);
        setUsers((prevState) => {
          return [...users];
        });
        break;
      }
    }
  };

  return (
    <div>
      {isError ? (
        <Modal message={errorMessage} onExitModal={exitModalHandler} />
      ) : null}
      <AddUser onErrorInput={errorHandler} onAddUser={addUserHandler} />
      <List onDelete={deleteItemHandler} items={users} />
    </div>
  );
}

export default App;
