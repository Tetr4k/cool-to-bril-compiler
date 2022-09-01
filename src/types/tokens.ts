enum tokens {
	//keywords
	K_CLASS = "class",
	K_IF = "if",
	K_ELSE= "else",
	K_FI= "fi",
	K_IN= "in",
	K_INT= "inherits",
	K_ISVOID= "isvoid",
	K_LET= "let",
	K_LOOP= "loop",
	K_POOL= "pool",
	K_THEN= "then",
	K_WHILE= "while",
	K_CASE= "case",
	K_ESAC= "esac",
	K_NEW= "new",
	K_OF= "of",
	K_NOT= "not",
	K_TRUE= "true",
	K_FALSE= "false",

	//identifiers
	ID= "[0-9A-Za-z_]+",
	INT= "[0-9]+",
	STR= "\"(.|\\b|\\t|\\n|\\f)*\"",
	SELF= "self",
	SELF_TYPE= "SELF_TYPE",


	//coments
	LN_CMT= "--",
	CMT_START= "(*",
	CMT_END= "*)",
	
	//operators
	OP_ATR= "<-",
	OP_CO= "=>", //PERGUNTAR
	OP_GE= ">=",
	OP_SE= "<=",
	OP_GRT= ">",
	OP_SML= "<",
	OP_EQL= "=",
	OP_PNT= ".", //PERGUNTAR
	OP_ARB= "@", //PERGUNTAR
	
	//symbols
	S_VI_STT= "[",
	S_VI_END= "]",
	S_PB_STT= "{",
	S_PB_END= "}",
	S_FP_STT= "(",
	S_FP_END= ")",
	S_TA= ":",
	S_ADD= "+",
	S_SUB= "-",
	S_MULT= "*",
	S_DIV= "/",
	S_NOT= "~",

	//white space
	WHITE_SPACE	= "\n\f\r\t\v\s"
}

export default tokens