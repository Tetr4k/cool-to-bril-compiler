import { ChangeEventHandler } from "react";

type codingAreaProps = {
	code: string;
	errorLine: number;
	onChange?: ChangeEventHandler;
}

export default codingAreaProps;