

const forms = document.querySelector("form")

forms.addEventListener("submit", (e)=>{
    e.preventDefault();

   const height = parseInt(document.querySelector("#height").value);
   const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector(".results")
 
    if(height === " " || isNaN(height) || height < 0  ){
        result.innerHTML  = `Please Enter a Valid number ${height}`
    }
    else if(weight === " " || isNaN(weight) || weight < 0  ){
        result.innerHTML  = `Please Enter a Valid number ${weight}`
    }
    else if(bmi === 18.6){
        result.innerHTML = `${bmi} You are underweight`
    }
   
    else {
      const bmi =   (weight / ((height*height)/10000)).toFixed(2)
        result.innerHTML = `<span> Your Result is : ${bmi} </span>`
    }
    
 
});