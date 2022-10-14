import { Action, AcceptAction, GoToAction, ReduceAction, ShiftAction } from "../../classes/SyntaxActions";
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

export default transitions;