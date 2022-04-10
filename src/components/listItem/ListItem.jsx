import "./ListItem.css";

const ListItem = (props) => {
  const deleteItemHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <div onClick={deleteItemHandler} className="singleItem">
      <p>{`${props.name} (${props.age} years old)`}</p>
    </div>
  );
};

export default ListItem;
