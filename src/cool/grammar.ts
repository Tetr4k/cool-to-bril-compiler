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

	//FEATURE -> FEATURE ID : TYPE ;                         VAR_DECLARATION
	//FEATURE -> FEATURE ID : TYPE <- EXPR ;
	//FEATURE -> FEATURE ID ( ) : TYPE { EXPR } ;           FUN_DECLARATION
	//FEATURE -> FEATURE ID ( FORMAL ) : TYPE { EXPR } ;

	//FEATURE -> ID : TYPE ;                          VAR_DECLARATION
	//FEATURE -> ID : TYPE <- EXPR ;
	//FEATURE -> ID ( ) : TYPE { EXPR } ;               FUN_DECLARATION
	//FEATURE -> ID ( FORMAL ) : TYPE { EXPR } ;

	//FORMAL -> ID : TYPE FUN_PARAM
	//FORMAL -> FORMAL , ID : TYPE

	//EXPR2 -> , EXPR
	//EXPR2 -> EXPR2 , EXPR
	//EXPR3 -> EXPR ; 
	//EXPR3 -> EXPR3 EXPR ;
	//EXPR4 -> EXPR4 , ID : TYPE
	//EXPR4 -> EXPR4 , ID : TYPE <- EXPR
	//EXPR4 -> , ID : TYPE
	//EXPR4 -> , ID : TYPE <- EXPR
	//EXPR5 -> ID : TYPE => EXPR ;
	//EXPR5 -> EXPR5 ID : TYPE => EXPR ;

	//EXPR -> ID          VAR
	//EXPR -> INTEGER     INTEGER
	//EXPR -> STRING       STRING
	//EXPR -> true	        BOOL
	//EXPR -> false

	//EXPR -> ( EXPR )
	//EXPR -> { EXPR3 }

	//EXPR -> ID <- EXPR
	//EXPR -> ID ( )
	//EXPR -> ID ( EXPR )
	//EXPR -> ID ( EXPR EXPR2 )

	//EXPR -> EXPR . ID ( )
	//EXPR -> EXPR . ID ( EXPR )
	//EXPR -> EXPR . ID ( EXPR EXPR2 )

	//EXPR -> EXPR @ TYPE . ID ( )
	//EXPR -> EXPR @ TYPE . ID ( EXPR )
	//EXPR -> EXPR @ TYPE . ID ( EXPR EXPR2 )

	//EXPR -> if EXPR then EXPR else EXPR fi
	//EXPR -> case EXPR of EXPR5 esac
	//EXPR -> while EXPR loop EXPR pool

	//EXPR -> let ID : TYPE in EXPR
	//EXPR -> let ID : TYPE EXPR4 in EXPR
	//EXPR -> let ID : TYPE <- EXPR in EXPR
	//EXPR -> let ID : TYPE <- EXPR EXPR4 in EXPR

	//EXPR -> new TYPE
	//EXPR -> isvoid EXPR
	//EXPR -> EXPR + EXPR
	//EXPR -> EXPR − EXPR
	//EXPR -> EXPR ∗ EXPR
	//EXPR -> EXPR / EXPR
	//EXPR -> ˜ EXPR
	//EXPR -> EXPR < EXPR
	//EXPR -> EXPR <= EXPR
	//EXPR -> EXPR = EXPR
	//EXPR -> not EXPR
]

export default grammar;