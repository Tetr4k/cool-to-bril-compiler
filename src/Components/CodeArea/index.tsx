import React from "react";
import { useState } from "react";

const CodeArea = () => {
	const [rows, setRows] = useState(1);
	const [coolCode, setCoolCode] = useState("");

	const handleCoolCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const textareaLineHeight = 36;

		const previousRows = event.target.rows;
		event.target.rows = 1;

		const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
		
		if (currentRows === previousRows) {
				event.target.rows = currentRows;
		}
		
		setRows(currentRows);
		setCoolCode(event.target.value);
	}

	const renderLineIndex = () => {
		const rowsList = [...Array(rows).keys()];
		console.log(rows, rowsList);
		return rowsList.map((value, index) => {
			return (<li key={index} style={index%2?{background: "#CCCCCC"}:{background: "#AAAAAA"}}>
				{value+1}
			</li>);
		})
	}

	return (
		<div
			className="coolcode-box"
		>
			<ol className="coolcode-list">
				{renderLineIndex()}
			</ol>
			<label htmlFor="code" className="coolcode-input">
				<textarea 
					id="code"
					rows={rows}
					onInput={handleCoolCodeChange}
					value={coolCode}
				/>
			</label>
		</div>
	)
}

export default CodeArea;