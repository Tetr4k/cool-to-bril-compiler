import React from "react";
import compiledAreaProps from "./props";
import classNames from "classnames";

const CompiledArea = (props: compiledAreaProps) => {

	const renderLineIndex = () => {
		const rowsList = [0, 1, 2, 3, 4];
		return rowsList.map((value, index) => {
			const listClassName = classNames(
				'destaque',
				{odd: index % 2 == 0}
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

	const boxClass = classNames('compiled-box', {dark: props.theme});
	const outputClass = classNames('compiled-output', {dark: props.theme});

	return (
		<div className={boxClass}>
			<ol className="line-index">
				{renderLineIndex()}
			</ol>
			<p className={outputClass}>
				{props.code}
			</p>
		</div>
	)
}

export default CompiledArea;