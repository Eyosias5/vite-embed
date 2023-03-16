import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("em")).render(
	<React.StrictMode>
		<CookiesProvider>
			<App />
		</CookiesProvider>
	</React.StrictMode>
);
