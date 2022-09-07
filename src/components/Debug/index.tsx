import React from "react";
import debugProps from "./props";
import { CSSTransition } from 'react-transition-group';
import classNames from "classnames";

const Debug = (props: debugProps) => {
	const messageClass = classNames('message', {dark: props.theme})

	return (
			<CSSTransition
				in={props.show}
				timeout={300}
				classNames='content'
				unmountOnExit
			>
				<div className='content'>
					<p className={messageClass}>
						{props.errorMessage}
					</p>
				</div>
			</CSSTransition>
	);
}

export default Debug;