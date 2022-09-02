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
				<ol className="content">
					{props.children}
				</ol>
			</CSSTransition>
	);
}

export default Debug;