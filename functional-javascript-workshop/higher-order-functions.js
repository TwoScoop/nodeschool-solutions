function repeat(operation, num) {
	

	for(i=0; i<num; i++) {
		return operation(); 	
	}
    
  
}
	
module.exports = repeat