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

	window.addEventListener("load", () => {
		document.cookie = "test=it's working; HttpOnly; Path=/; max-age=3600";
	});

	return (
		<div className="App">
			<div className="">
				<button onClick={() => setShowModal(true)}>Join Program</button>

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
									height: 330,
									width: 500,
									background: "white",
									borderRadius: 6,
									position: "relative",
									left: "-50%",
								}}
							>
								<p
									style={{
										textAlign: "center",
										text: "black",
										color: "black",

										paddingTop: "55px",
										fontSize: "28px",
									}}
								>
									Join Program
								</p>
								<label
									style={{
										display: "flex",
										flexDirection: "column",
										color: "black",
										width: "41%",
										margin: "0 26px",
									}}
								>
									Name:
									<input style={{ height: 31 }} type="text" name="name" />
								</label>
								<label
									style={{
										display: "flex",
										flexDirection: "column",
										color: "black",
										width: "41%",
										margin: "0 26px",
									}}
								>
									Email:
									<input style={{ height: 31 }} type="text" name="email" />
								</label>
								<div
									style={{
										color: "black",
										textAlign: "center",
										marginTop: 12,
										background: "yellow",
										width: "fit-content",
										padding: "8px 80px",
										borderRadius: 8,
										cursor: "pointer",
										margin: "30px auto",
									}}
									onClick={() => setShowModal(false)}
								>
									Join{" "}
								</div>
							</div>
						</div>,
						document.body
					)}
			</div>
		</div>
	);
}

export default App;
