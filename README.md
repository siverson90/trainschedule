# trainschedule

The user will be able to enter in the train detials. 

When user clicks submit, there should be an on click function that writes the input to the database using the push method to append.

There should be another function for value change that when the database is change the HTML is updated.

**on click function:

select the values from the input tags

use the database.ref().push()
  add all 4 variables

**value change function

Grab the values and push to HTML

**function just for upating train times???

add a math function to see the current time and make the updating schedule logic

create a while loop where the variable is the current time.

each loop will add the the frequency until the time is train time is greater than the current time. When and only when its greater it will be returned to the table. 

for loop
nested if that is checking is train next arrival > current time, if True return