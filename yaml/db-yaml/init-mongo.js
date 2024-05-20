// init-mongo.js

// Create a new database
const dbName = process.env.db_name;
const dbCollection = process.env.db_collection;
const db = db.getSiblingDB(dbName);

// Create a new collection (table)
db.createCollection(dbCollection);

// Insert a user document into the collection
db[dbCollection].insert({
    fname: 'Rahul',
    lname: 'Seth'
});

// Create a new database user
db.createUser({
    user: process.env.db_user,
    pwd: process.env.db_pass,
    roles: [{ role: 'readWrite', db: dbName }]
});
