import Token from "../classes/Token";
import TokenType from "../types/TokenType";
import { shift, reduce, error } from "./parsingFunctions";
import { SynError } from "../classes/Errors";
import { transitions, symbols } from "./cool/transitions";
import { getSymbol } from "./functions";

//Step function
function step(input: Array<Token>, tokenStack = new Array<Token>, stateStack = [0], errors = new Array<SynError>): Array<SynError>/*for now*/{
	if (!input.length){
		console.log("Deny");
		return errors;
	}
	
	const nextToken = input.pop();
	
	const previousState = stateStack.pop();
	stateStack.push(previousState);

	const nextWord = getSymbol(nextToken);
	const nextAction = transitions[previousState][symbols.get(nextWord)];

	if (nextAction){
		//Shift
		if (nextAction[0] == "s"){
			[tokenStack, stateStack] = shift(tokenStack, stateStack, nextToken, nextAction[1])
			return step(input, tokenStack, stateStack, errors);
		}
		//Reduce
		if (nextAction[0] == "r"){
			input.push(nextToken);
			[tokenStack, stateStack] = reduce(tokenStack, stateStack, nextAction[1]);
			//tree.push(newTree);
			return step(input, tokenStack, stateStack, errors);
		}
		//Accept
		if (nextAction[0] == "acc"){
			console.log("Accept");
			return errors;
		}
	}
	
	errors = error(nextToken, previousState, input, tokenStack, stateStack, errors);

	return step(input, tokenStack, stateStack, errors);
}

//doSynAnalysis function
function doSynAnalysis(input: Array<Token>): Array<SynError>/*for now*/{
	input.push(new Token('EOF', 0, TokenType.INVALID))
	input.reverse()
	return step(input)
}

export default doSynAnalysis;