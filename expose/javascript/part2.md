1. 3 because i stops incrementing at 3 which is length of prices in this case
2. 150 because the last item that was passed to discountedPrice was 300 * 0.5.
3. 150 because the last item that went through the rounding was 300 * 0.5, and multiplying/dividing by 100 simultaneously results in the same thing as 2.
4. Returns Array(3) [ 50, 100, 150 ] and console would output nothing because we don't have console log, returns because we have return the discounted array
5. Uncaught ReferenceError: i is not defined since i is not accessable outside the loop block
6. Uncaught ReferenceError: discountedPrice is not defined since discountedPrice is not accessable outside loop block
7. 150 because the last item that went through rounding was 300 * 0.5, and also because its still within the scope of the variable
8. Returns Array(3) [ 50, 100, 150 ] and console would output nothing because we don't have console log, returns value since variable is within scope of returning it
9. Uncaught ReferenceError: i is not defined since i is not accessable outside the loop block
10. 3 because length is within the function block where console.log(length) is called
11. returns Array(3) [ 50, 100, 150 ] and console would output nothing because we don't have console log, returns value since variable is within scope of returning it
12.  a. student.name, b. student['Grad Year'], c. student.greeting(), d. student['Favorite Teacher'].name, e. student.courseLoad[0]
13.  a. '32', b. 1, c. 3, d. '3null', e. 4, f. 0, g. '3undefined', h. NaN
14.  a. true, b. false, c. true, d. false, e. false, f. true
15.  The difference is that == compares the value whilst === compares the value and the type
16.  [part2-question16.js](https://github.com/AlainZhangStudent/sp25-cse110-lab4-/blob/main/expose/javascript/part2-question16.js)
17.  modifyArray is called with an argument for list [1,2,3] and argument for function that multiplies its own argument by two. then in modifyArray func it iterates through array, pushing into the newArr the elements in list [1,2,3] into callback, which multiplies them by 2, so [2,4,6] is sent to newArr and returned as such.
18.  [part2-question18.js](https://github.com/AlainZhangStudent/sp25-cse110-lab4-/blob/main/expose/javascript/part2-question18.js)
