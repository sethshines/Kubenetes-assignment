var constants = require("./constants");
const mongoose = require('mongoose');

class DbConnector {
  conectionObject;
  constructor(app) {
    this.createConnectionObj(constants.dbConst.MONGODB, app);
  }

  createConnectionObj(db, app) {
    let { dbConst, dbStr } = constants;
    switch (db) {
      case dbConst.MYSQL:
        this.conectionObject = mysql.createConnection({
          host: process.env.db_host,
          user: process.env.db_user,
          password: process.env.db_pass,
        });

        this.conectionObject.connect(function (err) {
          if (err) throw err;
          app.locals.dbConnection = this.conectionObject;
        });
      case dbConst.MONGODB:
        let dbUri = dbConst.DB_URI;
        dbUri = dbUri.replace(dbStr.DB_USER, process.env.db_user);
        dbUri = dbUri.replace(dbStr.DB_PASS, process.env.db_pass);
        dbUri = dbUri.replace(dbStr.DB_HOST, process.env.db_host);
        dbUri = dbUri.replace(dbStr.DB_NAME, process.env.db_name);
        mongoose
          .connect(dbUri)
          .then((con) => {
            console.log('Connected to DB!');
          })
          .catch((err) => console.log(err));
    }
  }
}

module.exports = DbConnector;
