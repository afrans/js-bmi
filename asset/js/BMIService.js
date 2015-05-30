var BMIService = {

    getIndex: function (weight, height) {
        if (weight ==0 || height ==0){
            return null;
        } else {
            return weight / (height * height);
        }
    },
    
    getDescription: function (index){
        //TODO to be implemented
        return "";
    }
};