import "./Modal.css";
import Button from "../button/Button";
const Modal = (props) => {
  const okayClickHandler = () => {
    props.onExitModal();
  };

  return (
    <div className="dark-screen">
      <div className="modal-container">
        <div className="header">An Error Has Occured</div>
        <div className="innerText">
          <div className="msg">{props.message}</div>
          <div className="button">
            <Button onClick={okayClickHandler} text={"Okay"}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
