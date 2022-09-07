import { ChangeEventHandler } from "react";

type codingAreaProps = {
	code: string;
	errorLine: number;
	onChange?: ChangeEventHandler;
	theme: boolean;
}

export default codingAreaProps;