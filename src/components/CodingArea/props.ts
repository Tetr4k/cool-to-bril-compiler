import { ChangeEventHandler } from "react";

type codingAreaProps = {
	code: string;
	errors: Array<number>;
	onChange?: ChangeEventHandler;
	theme: boolean;
}

export default codingAreaProps;