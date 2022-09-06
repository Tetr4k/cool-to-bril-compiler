import React from "react";
import { useState } from "react";
import codingAreaProps from "./props";
import classNames from "classnames";

const CodingArea = (props: codingAreaProps) => {
	const initialRows = 1;
	const [rows, setRows] = useState(initialRows);
	const handleLineInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const textareaLineHeight = 16;
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
			const listClassName = classNames(
				'destaque',
				{odd: index%2 == 0},
				{error: index == props.error-1}
			);
			return (
				<li key={index} className={listClassName}>
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
				{React.cloneElement(props.children, {
					rows: rows,
					onInput: handleLineInput,
					id: "code",
					placeholder: "Code here . . ."
				})}
			</label>
		</div>
	)
}

export default CodingArea;