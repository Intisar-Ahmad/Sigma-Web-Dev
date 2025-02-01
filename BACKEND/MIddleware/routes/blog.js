const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
    console.log("Hi , I am a middleware");
    next()
})

router.get('/',(req,res)=>{
    res.send("This is a route through express router");
})

module.exports = router;