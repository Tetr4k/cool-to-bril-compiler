import React from "react";
import { useState } from "react";
import codingAreaProps from "./props";

const CodingArea = (props: codingAreaProps) => {
	const initialRows = 1;
	const [rows, setRows] = useState(initialRows);

	const handleLineInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const textareaLineHeight = 32;
		const previousRows = event.target.rows;
		event.target.rows = initialRows;
		const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
		if (currentRows === previousRows) {
			event.target.rows = currentRows;
		}
		setRows(currentRows);
	}

	const renderLineIndex = () => {
		const rowsList = [...Array(rows).keys()];
		return rowsList.map((value, index) => {
			return (
				<li key={index} style={index%2?{background: "#0000BF"}:{background: "#0000E6"}}>
					{value+1}
				</li>
			);
		})
	}

	return (
		<div className="coding-box">
			<ol className="coding-list">
				{renderLineIndex()}
			</ol>
			<label 
				htmlFor="code" 
				className="coding-input"
			>
				{React.cloneElement(props.children, { rows: rows, onInput: handleLineInput, id: "code"})}
			</label>
		</div>
	)
}

export default CodingArea;