import Action from "./Action";

class ReduceAction extends Action{
	private rule: number;

	constructor(previousState: number, rule: number){
		super(previousState);
		this.rule = rule;
	}

	get getRule(): number{
		return this.rule;
	}
}

export default ReduceAction;