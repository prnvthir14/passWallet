"use strict";

let express = require('express');
//let app = express();
let router = express.Router();

router.route('/',(req,res) => {

  res.send('logins get req');

})
  .post((req,res) => {

    res.send('logins post req');

  }).get((req,res) => {

    res.send("this is login page");

  });



module.exports = router;
