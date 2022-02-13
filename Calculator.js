// function to display values
function display(value){
document.getElementById("result").value +=value;
}

// function to clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
   }

// functio to evaluate operations and return results
function calculate() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y
}
