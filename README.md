# functional-programming

Using:

https://www.youtube.com/watch?v=LVvoSRrkk_g&list=PL77JVjKTJT2hExCayDzVexHmMqb88GF07

https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0

## Highlights from articles above

### What is Functional Programming?
Functional programming (often abbreviated FP) is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects. Functional programming is declarative rather than imperative, and application state flows through pure functions. Contrast with object oriented programming, where application state is usually shared and colocated with methods in objects.

Functional programming is a programming paradigm, meaning that it is a way of thinking about software construction based on some fundamental, defining principles.

Short definition:

* Pure functions
* Function composition
* Avoid shared state
* Avoid mutating state
* Avoid side effects

### Pure Function
A pure function is a function which:
* Given the same inputs, always returns the same output, and
* Has no side-effects

### Function Composition
Function composition is the process of combining two or more functions in order to produce a new function or perform some computation.

### Shared State
Shared state is any variable, object, or memory space that exists in a shared scope, or as the property of an object being passed between scopes.

### Immutability
An immutable object is an object that can’t be modified after it’s created. Conversely, a mutable object is any object which can be modified after it’s created.

### Side Effects
A side effect is any application state change that is observable outside the called function other than its return value.

### Higher Order Functions
A higher order function is any function which takes a function as an argument, returns a function, or both. Higher order functions are often used to:

* Abstract or isolate actions, effects, or async flow control using callback functions, promises, monads, etc…
* Create utilities which can act on a wide variety of data types
* Partially apply a function to its arguments or create a curried function for the purpose of reuse or function composition
* Take a list of functions and return some composition of those input functions

In Functional Programming, a function is a first-class citizen of the language. In other words, a function is just another value.

### Declarative vs Imperative
**Imperative** programs spend lines of code describing the specific steps used to achieve the desired results — the flow control: How to do things.

**Imperative** code frequently utilizes statements. A statement is a piece of code which performs some action. Examples of commonly used statements include for, if, switch, throw, etc…

**Declarative** programs abstract the flow control process, and instead spend lines of code describing the data flow: What to do. The how gets abstracted away.

**Declarative** code relies more on expressions. An expression is a piece of code which evaluates to some value. Expressions are usually some combination of function calls, values, and operators which are evaluated to produce the resulting value.

### Referential Transparency
Referential Transparency is a fancy term to describe that a pure function can safely be replaced by its expression. An example will help illustrate this.