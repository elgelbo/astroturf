const express = require('express');
const router = express.Router();
const pageControl = require('../controllers/pageControl');

const { catchErrors } = require('../handlers/errorHandlers')

// GLOBAL
router.get('/',  pageControl.homePage);
router.get('/yelp',  catchErrors(pageControl.yelpPage));
router.get('/api/yelp',  catchErrors(pageControl.yelpData));

module.exports = router;
