document.getElementById('calculate').addEventListener('click',() => {
    weight = parseInt(document.getElementById('weight').value)
    height = parseInt(document.getElementById('height').value)
    if(!isNaN(weight) && !isNaN(height)){
        let bmi = (weight/((height*height)/100)*100).toFixed(1);
        document.getElementById('result1').innerHTML = 'Your BMI is: '+ bmi;
        if(bmi <= 18.4){
            document.getElementById('result2').innerHTML = 'Your BMI Status: Underweight';
            clearTableRowBackground();
            document.getElementById('row1').style.backgroundColor = 'rgba(255, 255, 255, 0.374)';
        }
        else if(bmi >= 18.5 && bmi <= 24.9){
            document.getElementById('result2').innerHTML = 'Your BMI Status: Normal';
            clearTableRowBackground();
            document.getElementById('row2').style.backgroundColor = 'rgba(255, 255, 255, 0.374)';
        }
        else if(bmi >= 25.0 && bmi <= 39.9){
            document.getElementById('result2').innerHTML = 'Your BMI Status: Overweight';
            clearTableRowBackground();
            document.getElementById('row3').style.backgroundColor = 'rgba(255, 255, 255, 0.374)';
        }
        else{
            document.getElementById('result2').innerHTML = 'Your BMI Status: Obese';
            clearTableRowBackground();
            document.getElementById('row4').style.backgroundColor = 'rgba(255, 255, 255, 0.374)';
        }
    }else{
        alert('Please enter valid weight and height')
    }
    
})

clearTableRowBackground = () => {
    document.getElementById('row1').style.backgroundColor = '';
    document.getElementById('row2').style.backgroundColor = '';
    document.getElementById('row3').style.backgroundColor = '';
    document.getElementById('row4').backgroundColor = '';
}