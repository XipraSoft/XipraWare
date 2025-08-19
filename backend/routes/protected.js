const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');

router.get('/', verifyToken, (req, res) => {
  res.json({ message: `Hello User ID: ${req.user.id}` });
});

module.exports = router;
