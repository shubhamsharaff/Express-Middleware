const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Assuming you have the data of posts available
  const posts = [
    { id: 1, title: 'Post 1', content: 'Content 1' },
    { id: 2, title: 'Post 2', content: 'Content 2' },
    // ... more posts
  ];

  // Send the posts data as response
  res.json(posts);
});

module.exports = router;
