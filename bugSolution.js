const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      const result = someAsyncOperationThatMightThrowAnError();
      res.send('Hello World!');
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
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