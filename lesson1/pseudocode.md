function takes input of 2 numbers
  returns the sum

Function takes in put of an array of integers
  returns new array with every other element

method takes an array of integers
  returns new array with every other element starting at the first

function takes a string
  determines 3rd occurance of a given character
  if charachter does not occur 3 times, return null
  else returns that charachters index

function takes two arrays of numbers
  merge the two arrays in a way that
    assigns first array to even indexes
     assigns second array to odd indexes
  returns the new merged array


START

GET var1
GET var2
  PRINT var1 + var2


GET array of integers
  SET iterator = 1
  WHILE iterator <= length of numbers
    SET newArray = newArray + currentNumber

    iterator = iterator + 2

  Return newArray  

  
GET array of integers
  SET iterator = 1
  WHILE iterator <= length of numbers
    SET newArray = newArray + currentNumber

    iterator = iterator + 2

  Return newArray  


Object 
  method: Get string
            IF charachter apears 3 times
              return Charachter index
            ELSE 
              return null


GET arrayNumbers1
GET arrayNumbers2
SET mergedArray
SET iterator1 = 0
SET iterator2 = 1
  WHILE iterator <= length of arrayNumbers1
    mergedArray = ArrayNumbers1[iterator]
    iterator1 = iterator1 + 2
  WHILE iterator <= length of arrayNumbers2
    mergedArray = ArrayNumbers2[iterator]
    iterator2 = iterator1 + 2
  return mergedArray;

STOP