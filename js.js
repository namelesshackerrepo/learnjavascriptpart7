function greatestNumber(num1, num2, num3) {
  // You need to write the code for this function
  // It should compare the three parameters
  //and return the one that is the greatest
  //Extra credit:  what if none are greater?  
  //Return a string explaining that none are gereater if so.  
}

// add a click listener to the button.  Each time the button is clicked, the code
//inside will be run.  
document.getElementById('submit').addEventListener('click', function() {
  //grabs the values from the input boxes and assigns them to a variable
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var num3 = document.getElementById('num3').value;

  // inserts into the web page in the div with an id of display.  Inserts the value returned
  //from calling greatestNumber and gives the above variables as arguments.  
  document.getElementById('display').innerHTML = greatestNumber(num1, num2, num3);
})