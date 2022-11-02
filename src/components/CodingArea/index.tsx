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
				{odd: index % 2 == 0},
				{error: props.errors.includes(index+1)}
			);
			return (
				<li
					key={index}
					className={listClassName}
				>
					{value+1}
				</li>
			);
		})
	}

	const boxClass = classNames('coding-box', {dark: props.theme});
	const inputClass = classNames('coding-input', {dark: props.theme});

	return (
		<div className={boxClass}>
			<ol className="line-index">
				{renderLineIndex()}
			</ol>
			<label 
				htmlFor="code" 
				className={inputClass}
			>
				<textarea
					rows={rows}
					onInput={handleLineInput}
					id="code"
					placeholder="Code here . . ."
					onChange={props.onChange}
					spellCheck="false"
				/>
			</label>
		</div>
	)
}

export default CodingArea;
