import { useState, useEffect } from 'react'
import { sendMail } from "../services/sendMail";

export default function HomePage() {
	const buttonWrapperStyle = {
		color: "white",
		display: "inline-block",
		backgroundColor: "DodgerBlue",
		padding: "10px",
		fontFamily: "Arial",
		maxWidth: "240px",
		margin: "0 auto",
		borderRadius: "3px",
	};

	async function handleOnClick() {
		let res = await sendMail('https://craftcode.design/');
		console.log(res);
	}

	return (
		<div style={buttonWrapperStyle}>
			<input type="text" value="https://craftcode.design/" />
			<button
				onClick={() => handleOnClick()}
			>
				Send me this url
			</button>
		</div>
	);
}

