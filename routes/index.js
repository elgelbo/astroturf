const express = require('express');
const router = express.Router();
const pageControl = require('../controllers/pageControl');

const { catchErrors } = require('../handlers/errorHandlers')

// GLOBAL
router.get('/', pageControl.yelpPage);
router.get('/yelp', pageControl.queryPage);
router.get('/api/yelp', catchErrors(pageControl.yelpData));
router.get('/api/search', catchErrors(pageControl.queryData));
module.exports = router;
