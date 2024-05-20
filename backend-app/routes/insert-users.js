var express = require("express");
var router = express.Router();
const UserData = require("../db/models/UserData");

/* Create users */
router.get("/", async function (req, res, next) {
  let createUsers = () => new Promise(async (resolve, reject) => {
    for (let i = 0; i < 1000; i++) {
      let userData = new UserData({
        fname: `Rahul ${i}`,
        lname: `Seth ${i}`,
      })
      await userData.save();
    }
    resolve();
  });
  
  createUsers().then(()=>{
    res.status(200).send('Added New Users to the DB.');
  }).catch(()=>{
    res.status(500).send('Something Went Wrong!');
  });
});

module.exports = router;
