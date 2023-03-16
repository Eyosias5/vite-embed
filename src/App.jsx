import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import "./App.css";
import { createPortal } from "react-dom";

import axios from "axios";

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
	const [affiliateCookie, setAffiliateCookie] = useCookies(["affiliate"]);

	useEffect(() => {
		console.log("starting.....");

		setAffiliateCookie(
			"affiliate",
			new URL(window.location.href).searchParams.get("affiliate")?.toString(),
			{
				path: "/",
				maxAge: 60 * 60,
			}
		);

		console.log(window.location.href);
	}, []);

	useEffect(() => {
		const fn = async (order_id, affiliate_id) => {
			await axios({
				method: "POST",
				url: "https://af66-196-190-60-115.eu.ngrok.io/affiliate/conversion",
				data: {
					order_id,
					affiliate_id,
				},
			});
		};

		console.log(window.location);
		console.log(window.location?.pathname || "no pathname");

		if (window.location.pathname.split("/").at(-1)?.toString() == "thank_you") {
			const order_id = window.location.pathname.split("/").at(-2);
			console.log("on Thank you page", order_id, affiliateCookie.affiliate);
			// fn(order_id, affiliateCookie.affiliate);
		}
	});

	useEffect(() => {
		const fn = async () => {
			// const { data } = await axios({
			// 	method: "POST",
			// 	url: "https://af66-196-190-60-115.eu.ngrok.io/affiliate",
			// 	data: {
			// 		affiliate: affiliateCookie.affiliate,
			// 	},
			// }).catch((err) => {
			// 	console.log(err);
			// });
			// console.log(data);
		};

		console.log("starting...", affiliateCookie.affiliate);

		if (affiliateCookie.affiliate) {
			fn();
		}
	}, [affiliateCookie.affiliate]);

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
