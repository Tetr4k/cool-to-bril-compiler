import React from "react";
import { useState } from "react";
import codeAreaProps from "./props";

const CodeArea = (props: codeAreaProps) => {
	const [rows, setRows] = useState(1);

	const handleLineInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const textareaLineHeight = 36;
		const previousRows = event.target.rows;
		event.target.rows = 1;
		const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
		if (currentRows === previousRows) {
			event.target.rows = currentRows;
		}
		setRows(currentRows);
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
				{React.cloneElement(props.children, { rows: rows, onInput: handleLineInput, id: "code"})}
			</label>
		</div>
	)
}

export default CodeArea;