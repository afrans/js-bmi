var BMIController = {

    init: function() {
        BMIController.setForm();
    },
    
    setForm: function(){
        var form = document.querySelector('form');
        form.addEventListener('submit', function(event){
            alert('Form submitted');
            //it is necessary to avoid form submition
            event.preventDefault();
        });
    },
    
    calculateBMI: function(form){
        
    },
    
    showResult: function(result){
        
    }
    
};

//initialization

BMIController.init();

