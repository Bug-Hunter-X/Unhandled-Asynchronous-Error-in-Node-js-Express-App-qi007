const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    // Here's where the potential error is. If something goes wrong during the asynchronous operation it won't be caught by the try...catch block.
    const result = someAsyncOperationThatMightThrowAnError();
    res.send('Hello World!');
  }, 100);
});

function someAsyncOperationThatMightThrowAnError() {
  // Simulate an error
  throw new Error('Something went wrong!');
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});