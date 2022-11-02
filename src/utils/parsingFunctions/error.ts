import { SynError } from "../../classes/Errors";
import Token from "../../classes/Token";
import { transitions, symbols } from "../cool/transitions";
import reduce from "./reduce";
import { getSymbol } from "../functions";

function searchReduce(previousState: number, stack: Array<[string, Token]>): string[]{
	const actions = [...transitions[previousState]];
	const validAction = actions.filter(elem => elem)[0];
	
	if (validAction[0]=='r')
		return validAction;

	stack.push(undefined, undefined);
	return searchReduce(parseInt(validAction[1]), stack);
}

function searchShift(previousState: number, input: Array<Token>): string[]{
	const nextToken = input.pop();
	const nextSymbol = getSymbol(nextToken)
	const nextAction = transitions[previousState][symbols.get(nextSymbol)];

	if (nextAction){
		input.push(nextToken);
		return nextAction;
	}

	return searchShift(previousState, input);
}

function error(errorToken: Token, previousState: string, input: Array<Token>, stack: Array<[string, Token]>, errors: Array<SynError>): Array<SynError>{
	errors.push(new SynError(errorToken))

	if (!input.length)
		return errors;
	
	const reduceAction = searchReduce(parseInt(previousState), stack);

	stack = reduce(stack, reduceAction[1]);
	
	const nextState = stack.pop();
	stack.push(nextState);

	searchShift(parseInt(nextState[0]), input);
	return errors;
}

export default error;
