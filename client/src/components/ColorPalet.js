import React, { useState } from "react";
import { send } from "../socketApi";

function ColorPalet({ activeColor }) {
	const [color, setColor] = useState("#282c34");
	return (
		<div className="palet-container">
			<input
				type="color"
				value={activeColor}
				onChange={(e) => setColor(e.target.value)}
			/>
			<button onClick={() => send(color)}>Change Background</button>
			{color}
		</div>
	);
}

export default ColorPalet;
