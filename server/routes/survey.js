const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const Response = require('../models/Response');

// POST /api/survey/submit — upsert answers
router.post('/submit', authMiddleware, async (req, res) => {
  try {
    const { answers } = req.body;
    const response = await Response.findOneAndUpdate(
      { user: req.user._id },
      { answers, submittedAt: new Date() },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    res.json({ success: true, response });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/survey/me — retrieve saved answers
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const response = await Response.findOne({ user: req.user._id });
    if (!response) return res.json({ answers: {} });
    res.json({ answers: Object.fromEntries(response.answers) });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
