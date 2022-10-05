import Action from "./Action";

class AcceptAction extends Action{
	constructor(previousState: number){
		super(previousState);
	}
}

export default AcceptAction;