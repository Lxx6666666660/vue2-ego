const mysql = require("mysql");

const client = mysql.createConnection({
    host:'127.0.0.1',
    port:'3307',
    user:'root',
    password:'123456',
    database:"vue-ego"
})

const sqlClient = (sql,arr,callback) =>{
    client.query(sql,arr,(error,result) =>{
        if(error){
            console.log(error);
            return;
        }
        callback(result)
    })
}

module.exports = sqlClient