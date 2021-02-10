"use strict";

let express = require('express');
//let app = express();
let router = express.Router();
// const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { Pool } = require('pg');
const dbParams = require('../lib/db.js');
const db = new Pool(dbParams);
db.connect();


//get request for /home
router.route('/')
  .get((req,res) => {
    console.log(req.session);
    const idToStore = req.session.user_email;
    console.log(idToStore); //why is this undefined??
    // req.session.user_email = idToStore;
    // req.session.user_email = dbres.rows[0].email;
    // console.log(dbres.rows[0].email)
    let paramsForQuery = [idToStore];
    db.query(
      `SELECT * FROM user_login_per_site WHERE user_name_for_site_login = $1;`,paramsForQuery)
      .then(dbres => {
        console.log(dbres); //works, retuns query results
        //res.json(dbres.rows[0].password);
        const queryResults = dbres.rows;
        let templateVars;
        if (req.session.user_email) {
          templateVars =
          { passwords: queryResults,
            idToStore
          };
        } else {
          templateVars =
          { passwords: queryResults,
            idToStore: null
          };
        }

        //res.render('index', templateVars);

        //here we rended our saved passwords
        res.render("myaccount",templateVars);


      }).catch(e => res.send('redirect to page that says email/login incorrect',e));


  });

//get and post route to create new login
router.route('/createNewLogin: user_name_for_site_login')
  .get((req,res) => {

    res.send("this iscreate new login userig");

  })
  .post((req,res) => {

    res.send("this iscreate new login userig");

  });


//get and post route to edit login
router.route('/editLogin/:user_id')
  .get((req,res) => {
    console.log('hi');
    //show foirm to edit here
    res.send("this is the edit GET ROUTE ");

    //now we need to update the user_login_per_site table;

    //need to display same forms as on register a new url
    //get information and update the same row in user_login_per_site

  })
  .post((req,res) => {

    //actual edit here
    res.send("this is the edit POST ROUTE ");

  });



//post route to edit login
router.route('/deleteLogin/:user_name_for_site_login_ID')
  .post((req,res) => {
    let delete_id = [req.params.user_name_for_site_login_ID];
    console.log(delete_id);
    //res.send("delete POST rost");

    //PLACEHOLDERS FOR QUERY
    //$1
    //console.log(logins.id);

    const queryString = `DELETE FROM user_login_per_site
    WHERE user_login_per_site.id = $1;`;

    db.query(
      queryString,delete_id)
      .then(dbres => {
        // const queryResults = dbres.rows;
        // let templateVars;
        // if (req.session.user_email) {
        //   templateVars =
        //   { passwords: queryResults,
        //     idToStore
        //   };
        // } else {
        //   templateVars =
        //   { passwords: queryResults,
        //     idToStore: null
        //   };
        // }

        //res.render('index', templateVars);

        //here we rended our saved passwords
        res.redirect("/home");



      }).catch(e => res.send('redirect to page that says email/login incorrect',e));







  });


// //get route for user to view their saved passwords
// router.route('/myPasswords:user_id')
//   .get((req,res) => {

//     res.send("this iscreate delete user id");

//   });

// //get route for ADMIN to view their organizations saved passwords
// router.route('/myOrganizationPasswords:id')
//   .get((req,res) => {

//     res.send("/home/myOrganizationPasswords:id");

//   });

module.exports = router;
