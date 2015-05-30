var BMIService = {

    getIndex: function (weight, height) {
/*        if (weight ==0 || height ==0){
            return null;
        } else {
            return weight / (height * height);
        }
*/
        
        if(typeof(weight) === 'number' && typeof(height) === 'number') {
			return weight / (height * height);
		}
		return null;
        
    },
    
    getDescription: function (index){
        //TODO to be implemented
        return "";
    }
};