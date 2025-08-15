 const form = document.querySelector('form')
// // if you use any value to take and store the input then it will show empty value
 form.addEventListener('submit', function (e){
     e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
     if (height === '' || height <= 0|| isNaN(height)) {
          results.innerHTML = `please give a valid height ${height}`;
     } else if (weight === '' || weight <= 0 || isNaN(weight)) {
         results.innerHTML = `Please provide a valid weight ${weight}`;
     } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        //show the result 
        if  (bmi < 18.6){
          results.innerHTML = `<span>  you are under weight person with bmi ${bmi}</span>`;
        } else if (18.6 < bmi && bmi < 24.9){
          results.innerHTML = `<span>  you are normal weight  person with bmi ${bmi}</span>`;
        } else {
          results.innerHTML = `<span>  you are over weight  person with bmi ${bmi}</span>`;
        }
       // results.innerHTML = `<span> ${bmi}</span>`;

     }
// //     // results.innerHTML = `${height}`;
 });

