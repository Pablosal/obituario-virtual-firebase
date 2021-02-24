import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.8)",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top:"0",
        zIndex: "3",
      }}
      onClick={() => props.fn()}
    >
      {props.children}
    </div>,
    document.getElementById("Backdrop")
  );
};

export default Backdrop;
