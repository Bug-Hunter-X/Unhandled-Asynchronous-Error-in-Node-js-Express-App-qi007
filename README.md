# Unhandled Asynchronous Error in Node.js Express App

This repository demonstrates a common error in Node.js applications where errors thrown within asynchronous operations (using `setTimeout` in this case) are not properly handled, leading to uncaught exceptions and application crashes.

## Bug Description

The `bug.js` file contains an Express.js app with a route handler that simulates an asynchronous operation using `setTimeout`.  Inside the `setTimeout` callback, `someAsyncOperationThatMightThrowAnError` function is called, which throws an error. However, this error is not caught because the try...catch block is not in the correct scope. This results in an uncaught exception that terminates the Node.js process.

## Solution

The `bugSolution.js` file provides a solution by properly handling the asynchronous error using a `try...catch` block within the `setTimeout` callback or using promises and `.catch()`.  This ensures that errors are caught and handled gracefully, preventing application crashes.