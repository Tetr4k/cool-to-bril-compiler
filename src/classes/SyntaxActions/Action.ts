abstract class Action{
	private previousState:number;

	constructor(previousState:number){
		this.previousState = previousState;
	}

	get previous():number{
		return this.previousState;
	}
}

export default Action;