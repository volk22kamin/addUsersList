import "./Button.css";

const Button = (props) => {
  return (
    <button type={props.type || "button"} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
