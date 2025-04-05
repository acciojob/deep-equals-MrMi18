function deepEquals(a, b) {
	if(isNaN(a) && isNaN(b)) return true;
	return a===b;
 
}

module.exports=deepEquals;
