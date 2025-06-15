// The var keyword declares variables with function scope, while let and const declare variables with block scope.

/*Global Scope:-----------> 
Variables declared outside of any function or block have global scope.
These variables can be accessed from anywhere in your code.
2. Function Scope (Local Scope):------------> 
Variables declared inside a function have function scope.
They are only accessible within that specific function.
Variables declared with var inside a function have function scope.
3. Block Scope:------------->
Variables declared inside a block (e.g., within curly braces {}) have block scope.
They are only accessible within that specific block.
Variables declared with let and const inside a block have block scope.
4. Module Scope:------->
When using JavaScript modules (with import and export), variables are scoped to the module.
They are not available globally unless explicitly exported.
5. Script Scope:--------->
Variables declared at the top level of a script file have script scope.
This is similar to global scope, but with some differences in how they interact with modules. */