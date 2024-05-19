
const dbStr = {
    DB_USER: '{db_user}',
    DB_PASS: '{db_pass}',
    DB_HOST: '{db_host}',
    DB_NAME: '{db_name}'
}
const dbConst = {
    MYSQL: 'mysql',
    MONGODB: 'mongoDb',
    DB_URI: `mongodb://${dbStr.DB_USER}:${dbStr.DB_PASS}@${dbStr.DB_HOST}/${dbStr.DB_NAME}`
}
module.exports = {dbConst, dbStr}