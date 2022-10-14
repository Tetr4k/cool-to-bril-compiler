//Shift function
function shift(stack: Array<string>, word: string, state: number){
	stack.push(word);
	stack.push(state.toString());
	return stack;
}

export default shift;