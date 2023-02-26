const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    res.render('homepage', {
      loggedIn: req.session.loggedIn
    });
  } catch(e) {
    res.status(500).json(e);
  }
});

module.exports = router;