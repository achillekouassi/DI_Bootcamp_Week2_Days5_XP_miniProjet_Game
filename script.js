/*
Create a JS file and link it to the index.html file.

Take a look at your html file, you should have a button with an “onclick” event. This event is equal to the function playTheGame(). It means that when you will click on the button, the function playTheGame() will be called.
We will learn more about events next week ;)


Now let’s create the function:

In the JS file, create a function called playTheGame() that takes no parameter.
In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).

If the answer is false, alert “No problem, Goodbye”.

If his answer is true, follow these steps:
Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). You then have to check the validity of the user’s number :

If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.
 */

 function playTheGame(){
    var userAnswer = confirm("Would you like to play the game?");
    if(userAnswer===false){
        alert("No problem, Goodbye");
    }else{
        var userNumber=prompt("Enter a number between 0 and 10");
        var convertedUserNumber=Number(userNumber)
        if (isNaN(convertedUserNumber)){
            alert("Sorry Not a number, Goodbye");
        } else if (convertedUserNumber > 10){
            alert("Sorry it's not a good Number, Goodbye ");
        }else{
            var computerNumber=Math.floor(Math.random()*11);
            compareNumbers(convertedUserNumber,computerNumber);  // Calling the compareNumbers in playTheGame function.
        }
      
    }
}


/*Second Part
Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber) that takes 2 parameters : userNumber and computerNumber

The point of this function is to check if the userNumber is the same as the computerNumber:
If userNumber is equal to computerNumber, alert “WINNER” and stop the game.

If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

If the user guessed more than 3 times, alert “out of chances” and exit the function.
*/

function compareNumbers(convertedUserNumber,computerNumber){
   var numberOfchance =1;
   while (numberOfchance <=4){
       if (convertedUserNumber===computerNumber){
        alert("WINNER");
        break;}
      else{
          if(numberOfchance===4){       // droping the game when the number of chance is out of 3
              alert("Out of chance");
            }
            else if (convertedUserNumber > computerNumber){   // Condition when the user's number is the biggest
                alert("Your number is bigger than computer's number")
                var userNumber = prompt("Enter a number between 0 and 10"); // Invite user to enter a number again
                convertedUserNumber=Number(userNumber);
                while (isNaN(convertedUserNumber || convertedUserNumber > 10 || userNumber.length===0)){ // A loop to force the user to enter a number between 0 and 10
                    alert("Please enter a good number");
                    userNumber = prompt("Enter a number between 0 and 10");
                    convertedUserNumber=Number(userNumber);  
                }
                computerNumber=Math.floor(Math.random()*11) // Ask the computer for  a new random number between 0 and 10
            }else{ //Condition when the user's number is the smallest
                alert("Your number is smaller than computer's number")
                userNumber = prompt("Enter a number between 0 and 10"); // Invite user to enter a number again
                convertedUserNumber=Number(userNumber);
                while (isNaN(convertedUserNumber || convertedUserNumber > 10 || userNumber.length===0)){ // A loop to force the user to enter a number between 0 and 10
                    alert("Please enter a good number");
                    alert("Please enter a good number");
                    userNumber = prompt("Enter a number between 0 and 10");
                    convertedUserNumber=Number(userNumber);  
                }
                computerNumber=Math.floor(Math.random()*11) // Ask the computer for  a new random number between 0 and 10
            }

        }
        numberOfchance+=1 // Incrementing the number of chance in order to get out of the loop 
       
    }
    
   
}



/*
Prime
In the First Part, instead of stopping the process if the user didn’t enter a valid number.
 Continue asking for a number until the user enters a valid number.
 */

 /* We will do this instruction inthe following lines because i don't really know if i have uderstood it. 
  So to use the function take it of comment before and put the first on top in comment
  */


/* 
 function playTheGame(){
    var userAnswer = confirm("Would you like to play the game?");
    if(userAnswer===false){
        alert("No problem, Goodbye");
    }else{
        var userNumber=prompt("Enter a number between 0 and 10");
        var convertedUserNumber=Number(userNumber)
        while(isNaN(convertedUserNumber) || convertedUserNumber > 10){
            alert("Please enter a good number");
            userNumber=prompt("Enter a number between 0 and 10");
            convertedUserNumber=Number(userNumber)
        }
        var computerNumber=Math.floor(Math.random()*11);
        compareNumbers(convertedUserNumber,computerNumber);  // Calling the compareNumbers in playTheGame function.

      
    }
}
*/
