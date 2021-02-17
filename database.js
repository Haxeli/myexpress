const sql = require("mysql");
const connection = sql.createPool(
    {
        host:"localhost",
        user:"netuser",
        password:"netpass",
        database:"oamk"
    }
);

module.exports = connection;