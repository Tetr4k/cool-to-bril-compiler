import React from "react";
import debugProps from "./props";
import { CSSTransition } from 'react-transition-group';

const Debug = (props: debugProps) => {
	return (
			<CSSTransition
				in={props.show}
				timeout={700}
				classNames='content'
				unmountOnExit
			>
				<p className="content">
					{props.tokens}
				</p>
			</CSSTransition>
	);
}

export default Debug;