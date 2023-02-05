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
      <div style={{ color: "black" }}>
        <h3>Thank you for Purchasing Product X</h3>
        <p>Your Discount code: HD12G3</p>
      </div>
    </div>
  );
}

export default App;
