var express = require('express');
const UserData = require('../db/models/UserData');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  // const dbConnect = req.app.locals.dbConnection;
  // dbConnect.
  const data = await UserData.find().exec();
  console.log(10, data);
  res.render('index', { title: 'Welcome to Kubernetes Assignment', users: data });
});

module.exports = router;
