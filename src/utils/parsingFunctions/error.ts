import { SynError } from "../../classes/Errors";
import Token from "../../classes/Token";
import { transitions, symbols } from "../../cool/transitions";
import reduce from "./reduce";
import { getSymbol } from "../functions";
import ActionType from "../../types/ActionType";
import Reducible from "../../classes/Reducible";

function getExpected(previousState: number){
	const actions = [...transitions[previousState]];
	const validAction = actions.filter(elem => elem[0]!=ActionType.ERROR)[0];
	const expected = symbols[actions.indexOf(validAction)];
	return expected;
}

function searchReduce(previousState: number, reducibleStack: Array<Reducible>, stateStack: Array<number>): [ActionType, number]{
	const actions = [...transitions[previousState]];
	const validAction = actions.filter(elem => elem[0]!=ActionType.ERROR)[0];

	if (validAction[0]==ActionType.REDUCE)
		return validAction;

	reducibleStack.push(undefined);
	stateStack.push(undefined);
	console.log(validAction)
	return searchReduce(validAction[1], reducibleStack, stateStack);
}

function searchShift(previousState: number, input: Array<Token>): [ActionType, number]{
	const nextToken = input.pop();
	const nextSymbol = getSymbol(nextToken);
	const nextAction = transitions[previousState][symbols.indexOf(nextSymbol)];

	if (nextAction){
		input.push(nextToken);
		return nextAction;
	}

	return searchShift(previousState, input);
}

function error(errorToken: Token, previousState: number, input: Array<Token>, reducibleStack: Array<Reducible>, stateStack: Array<number>, errors: Array<SynError>){
	const expected = getExpected(previousState);
	const last = reducibleStack.pop();
	reducibleStack.push(last);
	errors.push(new SynError(last.line, expected));//Arrumar

	if (!input.length)
		return errors;
	
	const reduceAction = searchReduce(previousState, reducibleStack, stateStack);
	reduce(reducibleStack, stateStack, reduceAction[1]);
	
	const nextState = stateStack.pop();
	stateStack.push(nextState);

	searchShift(nextState, input);
}

export default error;
