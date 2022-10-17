import Token from "../classes/Token";
import TokenType from "../types/TokenType";
import { shift, reduce, error } from "./parsingFunctions";
import { SynError } from "../classes/Errors";
import { transitions, symbols } from "./cool/transitions";
import { getSymbol } from "./functions";

//Step function
function step(input: Array<Token>, stack = new Array<[string, Token]>(['0', undefined]), errors = new Array<SynError>): Array<SynError>/*for now*/{
	if (!input.length)
		return errors
	const nextToken = input.pop();
	const previousState = stack.pop()[0];
	
	stack.push([previousState, undefined]);

	const nextWord = getSymbol(nextToken);
	const nextAction = transitions[parseInt(previousState)][symbols.get(nextWord)];

	if (nextAction){
		//Shift
		if (nextAction[0] == "s"){
			stack = shift(stack, nextToken, nextAction[1])
			return step(input, stack, errors);
		}
		//Reduce
		if (nextAction[0] == "r"){
			input.push(nextToken);
			stack = reduce(stack, nextAction[1]);
			return step(input, stack, errors);
		}
		//Accept
		if (nextAction[0] == "acc"){
			console.log("Accept");
			return errors;
		}
	}
	else{
		//if (nextToken.getType != TokenType.INVALID)
		console.log(symbols.get(nextWord), previousState, stack.map(elem => elem[0]))
		console.log(nextAction)
		//errors = error(nextToken, previousState, input, stack, errors);
		errors.push(new SynError(nextToken));
		return step(input, stack, errors);
	}
}

//doSynAnalysis function
function doSynAnalysis(input: Array<Token>): Array<SynError>/*for now*/{
	input.push(new Token('EOF', 0, TokenType.INVALID))
	input.reverse()
	return step(input)
}

export default doSynAnalysis;