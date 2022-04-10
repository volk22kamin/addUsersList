import "./List.css";

import ListItem from "../listItem/ListItem";

//  gets props from app(items)
const List = (props) => {
  const deleteItemHandler = (id) => {
    props.onDelete(id);
  };
  return (
    <div className="list">
      {props.items.length === 0 ? (
        <p>there are no users</p>
      ) : (
        props.items.map((item) => (
          <ListItem
            onDelete={deleteItemHandler}
            name={item.name}
            age={item.age}
            key={item.id}
            id={item.id}
          />
        ))
      )}
    </div>
  );
};

export default List;
