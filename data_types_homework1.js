
'number' + 3 + 3
/* Result is 'number33'
This is an example of concatenation (String operator + number + number). If at least one operand is a string, then the other operands will also be converted to a string.
*/

null + 3
/*Result is 3
Data type null means absence of any value, so we are adding nothing + 3 and receive 3.
*/

5 && "qwerty"
/* Result is "qwerty"
We have 2 truthy operands and the value of last operand is returned.
This is a logical operator that means "AND" (&&) (logical conjunction).Operator for a set of boolean operands will be true IF AND ONLY IF all the operands are true. Otherwise it will be false. It evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters OR the value of the last operand if they are all truthy (all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and document.all.).
*/

+'40' + +'2' + "hillel";
/* Result is "42hillel"
+'40' and +'2' this is unary plus which converts '40' and '2' into numbers and after it adds them as numbers and we receive 42 and after it concatenation happens.
*/

'10' - 5 === 6;
/*
Result is false
JS always tries to convert everything to number and if can then converts. So in this case '10' is converted to number and === means strict equality (check that both operends are equal) in this case 5 === 6 is not equal and that's why result is false.
*/


true + false
/*Result is 1
Because JS converts true in 1 and false in 0. JS always tries to bring everything to a number.
*/

'4px' - 3
/*
Result is NaN
JS always tries to convert everything to number but '4px' cannot be converted to number because it is not number (NaN).
*/

'4' - 3
/*
Result is 1
JS always tries to convert everything to number and if can then converts. So in this case '4' is converted to number resulting in the substraction 4 - 3 = 1.
*/

'6' + 3 ** 0;
/*
Result is '61'
First we are doing exponentiation (according to math rules) 3 ** 0 and receive 1 in this case (because any number raised to the power of 0 is 1). After it concatonation happens.
*/

12 / '6'
/*
Result is 2
JS always tries to convert everything to number and if can then converts. So in this case '6' is converted to number resulting in the division 12/6 = 2.
*/

'10' + (5 === 6);
/*
Result is '10false'
=== means strict equality (check that both operends are equal) in this case 5 === 6 is not equal and that's why result is false and after it concatonation happens.
*/

null == ''
/*
Result is false
== is equality operator checks whether its two operands are equal, returning a Boolean result. 
So in this case null is data type (null) and '' is just empty string. They are different.
*/

3 ** (9 / 3);
/*
Result is 27
First (according math rules) we do calculations in brackets 9/3 = 3 and after it we are doing exponentiation 3 ** 3 = 27.
*/

!!'false' == !!'true'
/*
Result is true
!! converts any value to its boolean equivalent without changing its truthiness (all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and document.all.).
So in this example both operators are truthy and we have next true == true and as a result response is true.
! converts a value to its boolean opposite (just for me example #!'lala' is false# and #!'' is true#).
*/

0 || '0' && 1
/*
Result is true
0 is a falsy value. '0' is a truthy value. 1 is a truthy value. 
*/

(+null == false) < 1;
/*
Result is false
+null this is unary plus which converts null to 0. 
== is equality operator checks whether its two operands are equal, returning a Boolean result. So in this case 0 == false response will be true.
true is the same as 1. So at final step we have 1 < 1 response will be false (according to math rules).
*/

false && true || true
/*
Result is true
false - is a falsy operand.
true - is a truthy operand.
&& - is a logical operator that means "AND" (&&) (logical conjunction).Operator for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false. It evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters OR the value of the last operand if they are all truthy.
In this case false && true - value false will be returned.
|| - is a logical operator (OR) and it will return true IF AND ONLY IF one or more of its operands is true.
So to sum it up false || true - will return true.
*/

false && (false || true);
/*
Result is false
(false || true) - this will return true because one of its operands is true.
false && true - this will return false because one of the operands is false.
*/

(+null == false) < 1 ** 5;
/*
Result is false
+null - this is unary plus which converts null to 0.
0 == false - this is the same and it will return true.
1 ** 5 - we are doing exponentiation and receive 1.
1 < 1 - this will return false (according to math rules).
*/