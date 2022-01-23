/*We’ve seen that % (the remainder operator) can be used to test whether a
number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
another way to define whether a positive whole number is even or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.
Test it on 50 and and 75. See how it behaves on -1. Why? Can you think of a
way to fix this?*/

function isEven (number) {
    
    while(number>0)
    {
        if(number==1)
        {
            console.log("The number is odd");
        }
        else if(number==0)
        {
            console.log("The number is even");
        }
        else {
            isEven(number-=2);
        }
    
    }
}

isEven(-1); //If the number entered is less than zero the function will exit