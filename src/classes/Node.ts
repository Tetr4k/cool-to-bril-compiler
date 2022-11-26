import RuleType from "../types/RuleType";
import Reducible from "./Reducible";

class Node implements Reducible{
	readonly type: RuleType;
	readonly nodes: Array<Reducible>;

	constructor(type: RuleType, nodes: Array<Reducible>){
		this.type = type;
		this.nodes = nodes;
	}
}

export default Node;