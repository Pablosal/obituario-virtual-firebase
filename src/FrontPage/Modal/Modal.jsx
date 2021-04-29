import ReactDOM from "react-dom";
const Modal = (props) => {
  return ReactDOM.createPortal(
    <div style={{position:"absolute",zIndex:"4",left:"0",
    right:"0",
    marginLeft: "auto",
    marginRight: "auto",
    height: "75%",
    top: "15%", /* push down by 50% of the height of the container */
    minWidth: "50%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#E76F51"
   }}>{props.children}</div>,
    document.getElementById("Modal")
  );
};

export default Modal;
