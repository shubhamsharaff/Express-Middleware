const isAuthenticated = (req, res, next) => {
  // Assuming you have a user object stored in req.user after authentication
  if (req.user) {
    // User is authenticated, proceed to the next middleware/route handler
    next();
  } else {
    // User is not authenticated, send a 401 Unauthorized status
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = isAuthenticated;
