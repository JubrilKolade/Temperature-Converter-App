
//Fahrenheit converter
function fTo(inputDegreeValue, conversionDegreeType) {
   let temperature = '';

   switch (conversionDegreeType) {
       case 'F':
           temperature = inputDegreeValue;
           break;
       case 'C':    
           temperature = eval((inputDegreeValue - 32) * (5 / 9));
           break;
       case 'K':
           temperature = eval((inputDegreeValue + 459.67) * (5 / 9));
          break;    
   }
  return temperature; 
}
//console.log (fTo(50, 'F')); to check if it works

//Celcius converter
function cTo(inputDegreeValue, conversionDegreeType) {
    let temperature = '';
    
    switch (conversionDegreeType) {
        case 'C':
            temperature = inputDegreeValue
            break;
        case 'F':
            temperature = eval((inputDegreeValue * (9 / 5)) + 32);
            break;
        case 'K': 
            temperature = eval(inputDegreeValue + 273.15);    
            break;
    }
   return temperature; 
}
//console.log (cTo(70, 'C')); to check if it works

//Kelvin converter
function kTo(inputDegreeValue, conversionDegreeType) {
    let temperature = '';
    
    switch (conversionDegreeType) {
        case 'K':
            temperature = inputDegreeValue
            break;
        case 'F':
            temperature = eval((inputDegreeValue - 273.15) * (9 / 5) + 32);
            break;
        case 'C': 
            temperature = eval(inputDegreeValue - 273.15);    
            break;
    }
   return temperature; 
}
//console.log (kTo(90, 'K')); to check if it works


const form = document.querySelector('form');
//console.log(form) 

//form submit event
form.addEventListener('submit',  convertInputDegree);
 //Degree input event
inputDegree.addEventListener('input', convertInputDegree);
 // selectdegree change event
selectInputDegreeType.addEventListener('change', convertInputDegree);
 // select conversion type change event
selectConversionType.addEventListener('change', convertInputDegree);

//the function convertInputDegree
function convertInputDegree(e) {
    e.preventDefault();
    //console.log(1)

    //get input value
    let inputDegree =  document.getElementById('inputDegree').value;
    inputDegree = parseInt(inputDegree);
    let selectInputDegreeType = document.getElementById('selectInputDegreeType').value;
    let selectConversionType = document.getElementById('selectConversionType').value;
    //console.log(inputDegree);
    //console.log(selectInputDegreeType);
    //console.log(selectConversionType);

    let resultValue = "";
 
    // switch (selectInputDegreeType) { //my failed switch statement
    //     case C:
    //         resultValue = cTo(inputDegree, selectConversionType);
    //         break;
    //     case K:
    //         resultValue = kTo(inputDegree, selectConversionType);
    //         break;    
    //     case F:
    //         resultValue = fTo(inputDegree, selectConversionType);
    //         break;
    // }

    if (selectInputDegreeType === "C") {
        resultValue = cTo(inputDegree, selectConversionType);
    } else if(selectInputDegreeType === "K"){
        resultValue = kTo(inputDegree, selectConversionType);
    } else {
        resultValue = fTo(inputDegree, selectConversionType);
    }
    //to prevent NaN
    let convertedDegree = document.getElementById('convertedDegree');

    if (isNaN(inputDegree)){
        convertedDegree.textContent = '';
        return;
    };

    //to update the degree unit
    let convertedUnit = document.getElementById('convertedUnit');
    convertedUnit.textContent = selectConversionType;
    //console.log(convertedUnit);

    //to update degree value
    if (selectConversionType ===  selectInputDegreeType) {
        convertedDegree.textContent = inputDegree;
     }else {
       return convertedDegree.textContent = resultValue.toFixed(2);
    }

   
};


