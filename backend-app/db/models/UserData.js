const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({ fname: String, lname: String });
const UserData = mongoose.model('UserData', schema);

module.exports = UserData;