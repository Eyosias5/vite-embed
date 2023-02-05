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
        <button onClick={() => setShowModal(true)}>Join Program</button>

        {showModal && (
          <div style={{ position: "absolute", right: 0, top: "10%" }}>
            <hi>hi</hi>
            <div onClick={() => setShowModal(false)}>CLOSE </div>
          </div>
        )}

        {showModal &&
          createPortal(
            <div
              style={{
                position: "fixed",
                left: "50%",
                top: "30%",
                zIndex: 999999,
              }}
            >
              <div
                style={{
                  height: 600,
                  width: 500,
                  background: "white",
                  borderRadius: 6,
                  position: "relative",
                  left: "-50%",
                }}
              >
                <p>Join Program</p>
                <input>Email</input>
              </div>
            </div>,
            document.body
          )}
      </div>
    </div>
  );
}

export default App;
