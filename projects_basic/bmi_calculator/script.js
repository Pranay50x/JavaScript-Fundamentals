const form = document.querySelector('form'); 

form.addEventListener('submit', function(e){
    e.preventDefault(); 

    const height  = parseInt(document.querySelector('#height').value); 
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results'); 

    if(weight === '' || weight<0 || height<0 || isNaN(weight) || height === '' || isNaN(height)){
        result.innerHTML = 'Please enter valid values';
    }
    else{
        const bmi = ((weight/height**2)*10000).toFixed(2);
        result.innerHTML = `Your BMI is ${bmi}`;
        if(bmi <18.6){
            result.innerHTML += '<br> You are underweight';
        }
        else if(bmi>18.6 && bmi<24.9){
            result.innerHTML += '<br> You are healthy';
        }
        else if(bmi>24.9 && bmi<29.9){
            result.innerHTML += '<br> You are overweight';
        }
        else{
            result.innerHTML += '<br> You are obese';
        }
    }
})