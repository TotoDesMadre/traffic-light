import React, { useState } from "react";

const TrafficLight = () => {
	const [color, SetColor] = useState("");
	const [boxShadow, SetBoxShadow] = useState("");
	// const [style, SetStyle] = useState("stilo");
	let redShadow = "boxshadow: 0px 0px 100px 40px red";

	return (
		<div>
			<div className="TrafficLight">
				<div
					className="light red"
					onClick={() => SetColor("red")}
					style={{
						backgroundColor: color === "red" ? "crimson" : "",
					}}></div>
				<div
					className="light yellow"
					onClick={() => SetColor("yellow")}
					style={{
						backgroundColor:
							color === "yellow" ? "crimson" : "yellow",
					}}></div>
				<div
					className="light green"
					onClick={() => SetColor("green")}
					style={{
						backgroundColor:
							color === "green" ? "crimson" : "green",
					}}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
