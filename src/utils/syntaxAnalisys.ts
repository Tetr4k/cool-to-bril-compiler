import Token from "../classes/Token";
import TokenType from "../types/TokenType";
import { AcceptAction, ReduceAction, ShiftAction } from "../classes/SyntaxActions";
import { shift, reduce } from "./parsingFunctions";
import { SynError } from "../classes/Errors";
import transitions from "./cool/transitions";

const staticTokenTypes = [TokenType.ESPECIAL, TokenType.KEYWORD, TokenType.SYMBOL];

//Step function
function step(tokens: Array<Token>, stack: Array<string>, errors = new Array<SynError>): Array<SynError>/*for now*/{

	if (!tokens.length){
		console.log("Erro");
		return errors;
	}

	const nextToken = tokens.pop();
	const nextState = stack.pop();
	
	stack.push(nextState);

	const nextWord = staticTokenTypes.includes(nextToken.getType) ? nextToken.getWord : TokenType[nextToken.getType];

	const nextAction = transitions
		.get(nextWord)
		.filter(
			elem => elem.previous == parseInt(nextState)
		).at(0);

	if (nextAction){
		//Shift
		if (nextAction instanceof ShiftAction){
			stack = shift(stack, nextWord, nextAction.next)
			return step(tokens, stack, errors);
		}

		//Reduce
		if (nextAction instanceof ReduceAction){
			tokens.push(nextToken);
			stack = reduce(stack, nextAction);
			return step(tokens, stack, errors);
		}
		//Accept
		if (nextAction instanceof AcceptAction){
			console.log("Accept");
			return errors;
		}
	}
	else{
		errors.push(new SynError(nextToken));
		return step(tokens, stack, errors);
	}
}

//doSynAnalysis function
function doSynAnalysis(tokens: Array<Token>): Array<SynError>/*for now*/{
	tokens = tokens.filter(
		elem => elem.getType != TokenType.INVALID
	);
	tokens.push(new Token('$', 0, TokenType.ESPECIAL))
	tokens.reverse()
	return step(tokens, ['0'])
}

export default doSynAnalysis;