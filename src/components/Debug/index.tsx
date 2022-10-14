import React from "react";
import debugProps from "./props";
import { CSSTransition } from 'react-transition-group';
import classNames from "classnames";

const Debug = (props: debugProps) => {
	const messageClass = classNames('message', {dark: props.theme})

	const renderErrors = () => props.errors.map(
		(elem, key) => (<li key={key}>{elem.toString()}</li>)
	)

	return (
			<CSSTransition
				in={props.show}
				timeout={300}
				classNames='content'
				unmountOnExit
			>
				<div className='content'>
					<ol className={messageClass}>
						{renderErrors()}
					</ol>
				</div>
			</CSSTransition>
	);
}

export default Debug;