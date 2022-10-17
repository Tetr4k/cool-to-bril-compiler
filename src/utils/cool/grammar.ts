//Cool grammar mutated
const grammar = [
	[["PROGRAM"],["CLASS"]],
	[["PROGRAM"],["PROGRAM","CLASS"]],
	[["CLASS"],["class","TYPE","{","}",";"]],
	[["CLASS"],["class","TYPE","{","FEATURE","}",";"]],
	[["CLASS"],["class","TYPE","inherits","TYPE","{","}",";"]],
	[["CLASS"],["class","TYPE","inherits","TYPE","{","FEATURE","}",";"]],
	[["FEATURE"],["ID",":","TYPE",";"]],
	[["FEATURE"],["ID",":","TYPE","<-","EXPR",";"]],
	[["FEATURE"],["ID","(",")",":","TYPE","{","EXPR","}",";"]],
	[["FEATURE"],["ID","(","FORMAL",")",":","TYPE","{","EXPR","}",";"]],
	[["FEATURE"],["FEATURE","ID",":","TYPE",";"]],
	[["FEATURE"],["FEATURE","ID",":","TYPE","<-","EXPR",";"]],
	[["FEATURE"],["FEATURE","ID","(",")",":","TYPE","{","EXPR","}",";"]],
	[["FEATURE"],["FEATURE","ID","(","FORMAL",")",":","TYPE","{","EXPR","}",";"]],
	[["FORMAL"],["ID",":","TYPE"]],
	[["FORMAL"],["FORMAL",",","ID",":","TYPE"]],
	[["EXPR2"],[",","EXPR"]],
	[["EXPR2"],["EXPR2",",","EXPR"]],
	[["EXPR3"],["EXPR",";"]],
	[["EXPR3"],["EXPR3","EXPR",";"]],
	[["EXPR4"],[",","ID",":","TYPE"]],
	[["EXPR4"],[",","ID",":","TYPE","<-","EXPR"]],
	[["EXPR4"],["EXPR4",",","ID",":","TYPE"]],
	[["EXPR4"],["EXPR4",",","ID",":","TYPE","<-","EXPR"]],
	[["EXPR5"],["ID",":","TYPE","=>","EXPR",";"]],
	[["EXPR5"],["EXPR5","ID",":","TYPE","=>","EXPR",";"]],
	[["EXPR"],["ID"]],
	[["EXPR"],["INTEGER"]],
	[["EXPR"],["STRING"]],
	[["EXPR"],["true"]],
	[["EXPR"],["false"]],
	[["EXPR"],["(","EXPR",")"]],
	[["EXPR"],["{","EXPR3","}"]],
	[["EXPR"],["ID","<-","EXPR"]],
	[["EXPR"],["ID","(",")"]],
	[["EXPR"],["ID","(","EXPR",")"]],
	[["EXPR"],["ID","(","EXPR","EXPR2",")"]],
	[["EXPR"],["EXPR",".","ID","(",")"]],
	[["EXPR"],["EXPR",".","ID","(","EXPR",")"]],
	[["EXPR"],["EXPR",".","ID","(","EXPR","EXPR2",")"]],
	[["EXPR"],["EXPR","@","TYPE",".","ID","(",")"]],
	[["EXPR"],["EXPR","@","TYPE",".","ID","(","EXPR",")"]],
	[["EXPR"],["EXPR","@","TYPE",".","ID","(","EXPR","EXPR2",")"]],
	[["EXPR"],["if","EXPR","then","EXPR","else","EXPR","fi"]],
	[["EXPR"],["case","EXPR","of","EXPR5","esac"]],
	[["EXPR"],["while","EXPR","loop","EXPR","pool"]],
	[["EXPR"],["let","ID",":","TYPE","in","EXPR"]],
	[["EXPR"],["let","ID",":","TYPE","EXPR4","in","EXPR"]],
	[["EXPR"],["let","ID",":","TYPE","<-","EXPR","in","EXPR"]],
	[["EXPR"],["let","ID",":","TYPE","<-","EXPR","EXPR4","in","EXPR"]],
	[["EXPR"],["new","TYPE"]],
	[["EXPR"],["isvoid","EXPR"]],
	[["EXPR"],["EXPR","+","EXPR"]],
	[["EXPR"],["EXPR","-","EXPR"]],
	[["EXPR"],["EXPR","*","EXPR"]],
	[["EXPR"],["EXPR","/","EXPR"]],
	[["EXPR"],["~","EXPR"]],
	[["EXPR"],["EXPR","<","EXPR"]],
	[["EXPR"],["EXPR","<=","EXPR"]],
	[["EXPR"],["EXPR","=","EXPR"]],
	[["EXPR"],["not","EXPR"]]
]

export default grammar;