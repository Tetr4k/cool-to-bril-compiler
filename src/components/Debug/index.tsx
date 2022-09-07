import React from "react";
import debugProps from "./props";
import { CSSTransition } from 'react-transition-group';

const Debug = (props: debugProps) => {
	return (
			<CSSTransition
				in={props.show}
				timeout={300}
				classNames='content'
				unmountOnExit
			>
				<p className="content">
					{props.errorMessage}
				</p>
			</CSSTransition>
	);
}

export default Debug;