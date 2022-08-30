import React from "react";
import debugProps from "./props";

const Debug = (props: debugProps) => {
	return (
		<p>
			{props.tokens}
		</p>
	);
}

export default Debug;