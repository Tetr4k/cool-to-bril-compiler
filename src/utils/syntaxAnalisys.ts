import Token from "../classes/Token";
import TokenType from "../types/TokenType";
import { Action, AcceptAction, GoToAction, ReduceAction, ShiftAction } from "../classes/SyntaxActions";

const staticTokenTypes = [TokenType.ESPECIAL, TokenType.KEYWORD, TokenType.SYMBOL];

let grammar = [
	['PROGRAM', ['PROGRAM', 'CLASS']],
	['PROGRAM', ['CLASS']],
	['CLASS', ['class', 'TYPE', 'inherits', 'TYPE', '{', '}', ';']],
	['CLASS', ['class', 'TYPE', '{', '}', ';']],
	['CLASS', ['class', 'TYPE', 'inherits', 'TYPE', '{', 'FEATURE', '}', ';']],
	['CLASS', ['class', 'TYPE', '{', 'FEATURE', '}', ';']],
	['FEATURE', ['FEATURE', 'ID', '(', 'FORMAL', ')', ':', 'TYPE', '{', 'EXPR', '}', ';']],
	['FEATURE', ['ID', '(', 'FORMAL', ')', ':', 'TYPE', '{', 'EXPR', '}', ';']],
	['FEATURE', ['FEATURE', 'ID', '(', ')', ':', 'TYPE', '{', 'EXPR', '}', ';']],
	['FEATURE', ['ID', '(', ')', ':', 'TYPE', '{', 'EXPR', '}', ';']],
	['FEATURE', ['FEATURE', 'ID', ':', 'TYPE', '<-', 'EXPR',  ';']],
	['FEATURE', ['ID', ':', 'TYPE', '<-', 'EXPR', ';']],
	['FEATURE', ['FEATURE', 'ID', ':', 'TYPE', ';']],
	['FEATURE', ['ID', ':', 'TYPE', ';']],
	['FORMAL', ['ID', ':', 'TYPE']],
	['FORMAL', ['FORMAL', ',', 'ID', ':', 'TYPE']],
	['EXPR2', ['EXPR2', ',', 'EXPR']],
	['EXPR2', [',', 'EXPR']],
	['EXPR3', ['EXPR3', 'EXPR', ';']],
	['EXPR3', ['EXPR', ';']],
	['EXPR4', ['EXPR4', ',', 'ID', ':', 'TYPE', '<-', 'EXPR']],
	['EXPR4', ['EXPR4', ',', 'ID', ':', 'TYPE']],
	['EXPR4', [',', 'ID', ':', 'TYPE', '<-', 'EXPR']],
	['EXPR4', [',', 'ID', ':', 'TYPE']],
	['EXPR5', ['EXPR5', 'ID', ':', 'TYPE', '=>', 'EXPR', ';']],
	['EXPR5', ['ID', ':', 'TYPE', '=>', 'EXPR', ';']],
	['EXPR', ['EXPR', '@', 'TYPE', '.', 'ID', '(', 'EXPR', 'EXPR2', ')']],
	['EXPR', ['EXPR', '.', 'ID', '(', 'EXPR', 'EXPR2', ')']],
	['EXPR', ['EXPR', '@', 'TYPE', '.', 'ID', '(', 'EXPR', ')']],
	['EXPR', ['EXPR', '.', 'ID', '(', 'EXPR', ')']],
	['EXPR', ['EXPR', '@', 'TYPE', '.', 'ID', '(', ')']],
	['EXPR', ['EXPR', '.', 'ID', '(', ')']],
	['EXPR', ['ID', '(', 'EXPR', 'EXPR2', ')']],
	['EXPR', ['ID', '(', 'EXPR', ')']],
	['EXPR', ['ID', '(', ')']],
	['EXPR', ['{', 'EXPR3', '}']],
	['EXPR', ['let', 'ID', ':', 'TYPE', '<-', 'EXPR', 'EXPR4', 'in', 'EXPR']],
	['EXPR', ['let', 'ID', ':', 'TYPE', 'EXPR4', 'in', 'EXPR']],
	['EXPR', ['let', 'ID', ':', 'TYPE', '<-', 'EXPR', 'in', 'EXPR']],
	['EXPR', ['let', 'ID', ':', 'TYPE', 'in', 'EXPR']],
	['EXPR', ['case', 'EXPR', 'of', 'EXPR5', 'esac']],
	['EXPR', ['if', 'EXPR', 'then', 'EXPR', 'else', 'EXPR', 'fi']],
	['EXPR', ['while', 'EXPR', 'loop', 'EXPR', 'pool']],
	['EXPR', ['ID', '<-', 'EXPR']],
	['EXPR', ['new', 'TYPE']],
	['EXPR', ['isvoid', 'EXPR']],
	['EXPR', ['EXPR', '+', 'EXPR']],
	['EXPR', ['EXPR', '-', 'EXPR']],
	['EXPR', ['EXPR', '+', 'EXPR']],
	['EXPR', ['EXPR', '/', 'EXPR']],
	['EXPR', ['~', 'EXPR']],
	['EXPR', ['EXPR', '<', 'EXPR']],
	['EXPR', ['EXPR', '<=', 'EXPR']],
	['EXPR', ['EXPR', '=', 'EXPR']],
	['EXPR', ['not', 'EXPR']],
	['EXPR', ['(', 'EXPR', ')']],
	['EXPR', ['ID']],
	['EXPR', ['INTEGER']],
	['EXPR', ['STRING']],
	['EXPR', ['true']],
	['EXPR', ['false']]
]

let transitions = new Map<string, Action[]>();

transitions.set('class', [
	new ShiftAction(0, 3),
	new ShiftAction(1, 3),
	new ReduceAction(2, 1),
	new ReduceAction(4, 0),
	new ReduceAction(11, 3),
	new ReduceAction(13, 2)
]);

transitions.set('TYPE', [
	new ShiftAction(3, 5),
	new ShiftAction(6, 8)
]);

transitions.set('inherits', [
	new ShiftAction(5, 6)
]);

transitions.set('{', [
	new ShiftAction(5, 7),
	new ShiftAction(8, 10)
]);

transitions.set('}', [
	new ShiftAction(7, 9),
	new ShiftAction(10, 12)
]);

transitions.set(';', [
	new ShiftAction(9, 11),
	new ShiftAction(12, 13)
]);

transitions.set('$', [
	new AcceptAction(1),
	new ReduceAction(2, 1),
	new ReduceAction(4, 0),
	new ReduceAction(11, 3),
	new ReduceAction(13, 2)
]);

transitions.set('PROGRAM', [
	new GoToAction(0, 1)
]);

transitions.set('CLASS', [
	new GoToAction(0, 2),
	new GoToAction(1, 4)
]);

function step(tokens: Array<Token>, stack: Array<string>, errors = new Array<Token>): Array<Token>/*for now*/{

	const nextToken = tokens.pop();
	const nextState = stack.pop();

	if (nextToken && nextState){

		stack.push(nextState);
		tokens.push(nextToken);

		let nextWord
		if (staticTokenTypes.includes(nextToken.getType))
			nextWord = nextToken.getWord;
		else
			nextWord = TokenType[nextToken.getType]

		const nextActions = transitions.get(nextWord);

		if(nextActions){
			const nextAction = nextActions.filter(
				elem => elem.previous == parseInt(nextState)
			).at(0);

			if (nextAction instanceof ShiftAction){
				tokens.pop();
				stack.push(nextWord);
				stack.push(nextAction.next.toString());
				return step(tokens, stack, errors);
			}

			if (nextAction instanceof ReduceAction){
				const rule = nextAction.getRule;
				const nonTerminal = grammar[rule][0];

				for(let i = 0; i < grammar[rule][1].length*2; i++)
					stack.pop()

				const goToState = stack.pop();

				if(goToState){
					stack.push(goToState);

					let goToActions
					if (nonTerminal){
						goToActions = transitions.get(nonTerminal.toString())

						let goToAction
						if(goToActions)
							goToAction = goToActions.filter(
								elem => elem.previous == parseInt(goToState)
							).at(0);

						stack.push(nonTerminal.toString())

						if (goToAction instanceof GoToAction)
							stack.push(goToAction.next.toString());
					}
				}

				return step(tokens, stack, errors);
			}

			if (nextAction instanceof AcceptAction)
				return errors;
		}
		else{
			errors.push(nextToken);
			tokens.pop();
			return step(tokens, stack, errors);
		}
	}
	return [];
}

function doSynAnalysis(tokens: Array<Token>): Array<Token>/*for now*/{
	tokens = tokens.filter(
		elem => elem.getType != TokenType.INVALID
	);
	tokens.push(new Token('$', 0, TokenType.ESPECIAL))
	tokens.reverse()
	return step(tokens, ['0'])
}

export default doSynAnalysis;