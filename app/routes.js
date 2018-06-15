var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {

  res.render('index')

})

// add your routes here
router.post('/juggling-balls-answer', function (req, res) {

  // make a variable to store the update
  var jugglingBalls = req.session.data['juggling-balls']

  // check whether the variable matches a condition
  if (jugglingBalls == "3 or more") {

    // send user to next pages
    res.redirect('/juggling-trick')

  } else {

    // send user to inelibible pages
    res.redirect('/inelgible')

  }

})

module.exports = router
