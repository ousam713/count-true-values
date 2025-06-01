const values = document.getElementById("inputField");
const result = document.getElementById("result");

function countTrue(){
    const inputField = values.value;
    
    const T = inputField.split(',').map(v => v.trim().toLowerCase() === "true");
    
    // correct jusque la XXXXXXXXXXXXXXXXXXXXXXXXX
    const counter = T.filter(v => v === true).length;
    console.log(counter);
    result.textContent = `le nombre de true apparaient dans le tableau est : ${counter}`;
}