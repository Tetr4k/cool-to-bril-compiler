const keyWords = [
	/^case(?!\w)/i,		//case
	/^class(?!\w)/i,	//class
	/^else(?!\w)/i,		//else
	/^esac(?!\w)/i,		//esac
	/^fi(?!\w)/i,		//fi
	/^if(?=[^\w])/i,	//if
	/^inherits(?!\w)/i,	//inherits
	/^isvoid(?!\w)/i,	//isvoid
	/^in(?!\w)/i,		//in
	/^let(?!\w)/i,		//let
	/^loop(?!\w)/i,		//loop
	/^new(?!\w)/i,		//new
	/^not(?!\w)/i,		//not
	/^of(?!\w)/i,		//of
	/^pool(?!\w)/i,		//pool
	/^then(?!\w)/i,		//then
	/^while(?!\w)/i,	//while
	/^true/,			//true
	/^false/			//false
];

export { keyWords };