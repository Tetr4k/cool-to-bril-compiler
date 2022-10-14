import { CompilationError } from "../../classes/Errors";

type debugProps = {
	errors: Array<CompilationError>;
	show: boolean;
	theme: boolean;
}

export default debugProps;