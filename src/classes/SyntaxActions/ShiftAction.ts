import Action from "./Action";

class ShiftAction extends Action{
	private nextState: number;
	
	constructor(previousState: number, nextState: number){
		super(previousState);
		this.nextState = nextState;
	}

	get next(): number{
		return this.nextState;
	}
}

export default ShiftAction;