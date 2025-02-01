const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})
router.get('/bhinoblog/:slug', (req, res) => {
  res.send(`This is the Bhino Blog on ${req.params.slug}`)
})

module.exports = router