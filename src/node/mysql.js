const mysql = require("mysql");

const cfg = {
    host:"localhost",
    user:"root",
    password:"lhxroot",
    database:"nodetest"
}

const conn = mysql.createConnection(cfg);

conn.connect(err => {
    if(err){
        throw err
    }else{
        console.log("连接成功！")
    }
})

