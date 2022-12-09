import Rule from "../classes/Rule";
import RuleType from "../types/RuleType";

//Cool grammar mutated
const grammar = [
	//PROGRAM -> CLASS
	new Rule("PROGRAM", 1, RuleType.PROGRAM),
	//PROGRAM -> PROGRAM CLASS
	new Rule("PROGRAM", 2, RuleType.PROGRAM),

	//CLASS -> class TYPE , { } ;
	new Rule("CLASS", 5, RuleType.CLASS),
	//CLASS -> class TYPE , { FEATURE } ;
	new Rule("CLASS", 6, RuleType.CLASS),
	//CLASS -> class TYPE inherits TYPE { } ;
	new Rule("CLASS", 7, RuleType.CLASS_INHERITS),
	//CLASS -> class TYPE inherits TYPE { FEATURE } ;
	new Rule("CLASS", 8, RuleType.CLASS_INHERITS),

	//FEATURE -> FEATURE ID : TYPE ;
	new Rule("FEATURE", 5, RuleType.ATRIBUTE),
	//FEATURE -> FEATURE ID : TYPE <- EXPR ;
	new Rule("FEATURE", 7, RuleType.ATRIBUTE),
	//FEATURE -> FEATURE ID ( ) : TYPE { EXPR } ; 
	new Rule("FEATURE", 10, RuleType.METHOD),
	//FEATURE -> FEATURE ID ( FORMAL ) : TYPE { EXPR } ;
	new Rule('FEATURE', 11, RuleType.METHOD),

	//FEATURE -> ID : TYPE ;
	new Rule("FEATURE", 4, RuleType.ATRIBUTE),
	//FEATURE -> ID : TYPE <- EXPR ;
	new Rule("FEATURE", 6, RuleType.ATRIBUTE),
	//FEATURE -> ID ( ) : TYPE { EXPR } ;
	new Rule("FEATURE", 9, RuleType.METHOD),
	//FEATURE -> ID ( FORMAL ) : TYPE { EXPR } ;
	new Rule("FEATURE", 10, RuleType.METHOD),

	//FORMAL -> ID : TYPE
	new Rule("FORMAL", 3, RuleType.METHOD_PARAM),
	//FORMAL -> FORMAL , ID : TYPE
	new Rule("FORMAL", 5, RuleType.METHOD_PARAM),

	//EXPR2 -> , EXPR
	new Rule("EXPR2", 2, RuleType.DEFAULT),
	//EXPR2 -> EXPR2 , EXPR
	new Rule("EXPR2", 3 ,RuleType.DEFAULT),
	//EXPR3 -> EXPR ;
	new Rule("EXPR3", 2, RuleType.DEFAULT),
	//EXPR3 -> EXPR3 EXPR ;
	new Rule("EXPR3", 3, RuleType.DEFAULT),
	//EXPR4 -> EXPR4 , ID : TYPE
	new Rule("EXPR4", 5, RuleType.DEFAULT),
	//EXPR4 -> EXPR4 , ID : TYPE <- EXPR
	new Rule("EXPR4", 7, RuleType.DEFAULT),
	//EXPR4 -> , ID : TYPE
	new Rule("EXPR4", 4, RuleType.DEFAULT),
	//EXPR4 -> , ID : TYPE <- EXPR
	new Rule("EXPR4", 6, RuleType.DEFAULT),
	//EXPR5 -> ID : TYPE => EXPR ;
	new Rule("EXPR5", 6, RuleType.DEFAULT),
	//EXPR5 -> EXPR5 ID : TYPE => EXPR ;
	new Rule("EXPR5", 7, RuleType.DEFAULT),

	//EXPR -> ID
	new Rule("EXPR", 1, RuleType.DEFAULT),
	//EXPR -> INTEGER
	new Rule("EXPR", 1, RuleType.DEFAULT),
	//EXPR -> STRING
	new Rule("EXPR", 1, RuleType.DEFAULT),
	//EXPR -> true
	new Rule("EXPR", 1, RuleType.DEFAULT),
	//EXPR -> false
	new Rule("EXPR", 1, RuleType.DEFAULT),

	//EXPR -> ( EXPR )
	new Rule("EXPR", 3, RuleType.DEFAULT),
	//EXPR -> { EXPR3 }
	new Rule("EXPR", 3, RuleType.DEFAULT),

	//EXPR -> ID <- EXPR
	new Rule("EXPR", 3, RuleType.DEFAULT),
	//EXPR -> ID ( )
	new Rule("EXPR", 3, RuleType.DEFAULT),
	//EXPR -> ID ( EXPR )
	new Rule("EXPR", 4, RuleType.DEFAULT),
	//EXPR -> ID ( EXPR EXPR2 )
	new Rule("EXPR", 5, RuleType.DEFAULT),

	//EXPR -> EXPR . ID ( )
	new Rule("EXPR", 5, RuleType.DEFAULT),
	//EXPR -> EXPR . ID ( EXPR )
	new Rule("EXPR", 6, RuleType.DEFAULT),
	//EXPR -> EXPR . ID ( EXPR EXPR2 )
	new Rule("EXPR", 7, RuleType.DEFAULT),

	//EXPR -> EXPR @ TYPE . ID ( )
	new Rule("EXPR", 7, RuleType.DEFAULT),
	//EXPR -> EXPR @ TYPE . ID ( EXPR )
	new Rule("EXPR", 8, RuleType.DEFAULT),
	//EXPR -> EXPR @ TYPE . ID ( EXPR EXPR2 )
	new Rule("EXPR", 9, RuleType.DEFAULT),

	//EXPR -> if EXPR then EXPR else EXPR fi
	new Rule("EXPR", 7, RuleType.DEFAULT),
	//EXPR -> case EXPR of EXPR5 esac
	new Rule("EXPR", 5, RuleType.DEFAULT),
	//EXPR -> while EXPR loop EXPR pool
	new Rule("EXPR", 5, RuleType.DEFAULT),

	//EXPR -> let ID : TYPE in EXPR
	new Rule("EXPR", 6, RuleType.DEFAULT),
	//EXPR -> let ID : TYPE EXPR4 in EXPR
	new Rule("EXPR", 7, RuleType.DEFAULT),
	//EXPR -> let ID : TYPE <- EXPR in EXPR
	new Rule("EXPR", 8, RuleType.DEFAULT),
	//EXPR -> let ID : TYPE <- EXPR EXPR4 in EXPR
	new Rule("EXPR", 9, RuleType.DEFAULT),

	//EXPR -> new TYPE
	new Rule("EXPR", 2, RuleType.DEFAULT),
	//EXPR -> isvoid EXPR
	new Rule("EXPR", 2, RuleType.DEFAULT),
	//EXPR -> EXPR + EXPR
	new Rule("EXPR", 3, RuleType.DEFAULT),
	//EXPR -> EXPR − EXPR
	new Rule("EXPR", 3, RuleType.DEFAULT),
	//EXPR -> EXPR ∗ EXPR
	new Rule("EXPR", 3, RuleType.DEFAULT),
	//EXPR -> EXPR / EXPR
	new Rule("EXPR", 3, RuleType.DEFAULT),
	//EXPR -> ˜ EXPR
	new Rule("EXPR", 2, RuleType.DEFAULT),
	//EXPR -> EXPR < EXPR
	new Rule("EXPR", 3, RuleType.DEFAULT),
	//EXPR -> EXPR <= EXPR
	new Rule("EXPR", 3, RuleType.DEFAULT),
	//EXPR -> EXPR = EXPR
	new Rule("EXPR", 3, RuleType.DEFAULT),
	//EXPR -> not EXPR
	new Rule("EXPR", 2, RuleType.DEFAULT),
]

export default grammar;