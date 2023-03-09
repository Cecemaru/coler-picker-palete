import React, { useState, useEffect } from "react";

import "./App.css";
import ColerPalet from "./components/ColorPalet";
import { init, subscribe } from "./socketApi";

function App() {
	const [activeColor, setActiveColor] = useState("#282c34");
	useEffect(() => {
		init();
		subscribe((color) => {
			setActiveColor(color);
		});
	}, []);

	return (
		<div className="App">
			<header className="App-header" style={{ backgroundColor: activeColor }}>
				<ColerPalet activeColor={activeColor} />
			</header>
		</div>
	);
}

export default App;
