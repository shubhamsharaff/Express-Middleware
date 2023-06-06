const express = require('express');
const app = express();

// Middleware
const authMiddleware = require('./middlewares/auth');
app.use(authMiddleware);

// Routes
const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
