import { useState, useEffect } from "react";

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

	const [affiliateCode, setAffliateCode] = useState("");

	useEffect(() => {
		console.log("start");

		setAffliateCode(
			new URL(window.location.href).searchParams.get("affiliate")
		);

		console.log(window.location.href);
	}, []);

	useEffect(() => {
		const fn = async () => {
			console.log(process.env.BACKEND_URL);
			fetch("https://e31c-196-189-18-129.eu.ngrok.io/affiliate", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(affiliateCode),
			})
				.catch((err) => {
					console.log(err);
				})
				.then((res) => {
					console.log(res);
				});
		};

		const encryptedPath = affiliateCode;
		console.log("starting...", affiliateCode);

		document.cookie = `affiliate=${affiliateCode || "true"};path=/`;

		if (affiliateCode) {
			fn();
		}
	}, [affiliateCode]);

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
									Join Programs
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
