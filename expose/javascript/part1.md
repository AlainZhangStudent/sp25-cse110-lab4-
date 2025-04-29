1. values added:  20
2. final result:  20
3. Var is not block scoped, meaning its visible throughout the whole function which can lead to unexpected behavior
4. values added:  20
5. Uncaught ReferenceError: result is not defined because since result is only defined in the if block, it is not available outside of it
6. Uncaught TypeError: invalid assignment to const 'res' on line 8 (before reaching 9 and 13) because we're trying to assign a value to a const
7. Same reason and error as 6.
