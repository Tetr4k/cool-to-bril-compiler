import Reducible from "../../classes/Reducible";
import Token from "../../classes/Token";

//Shift function
function shift(input: Array<Token>, reducibleStack: Array<Reducible>, stateStack: Array<number>, state: number){
	reducibleStack.push(input.pop());
	stateStack.push(state);
}

export default shift;