let a, b, c, d, e;

document.getElementById("d1").onclick = function () {
    a = parseFloat(document.getElementById("height").value);
    b = parseFloat(document.getElementById("weight").value);
    

   let z = b/(a*a);

    if (isNaN(a) || isNaN(b) ) {
        document.getElementById("demo").textContent = "Enter all the required fields";
    } else {
       
            document.getElementById("demo").textContent = `BMI is ${z}`;
        
    }
};
