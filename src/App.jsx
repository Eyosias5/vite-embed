import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { createPortal } from "react-dom";

export function ModalContent({ onClose }) {
  return (
    <div className="modal">
      <div>I'm a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <div className="">
        <button onClick={alert("hi")}>Show modal using a portal</button>
        {showModal &&
          createPortal(
            <ModalContent onClose={() => setShowModal(false)} />,
            document.body
          )}

        {showModal && (
          <div style={{ position: "absolute", top: 0 }}>
            this is a modal
            <div onClick={() => setShowModal(false)}>CLOSE </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
