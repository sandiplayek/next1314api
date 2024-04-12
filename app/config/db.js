const mysql =require("mysql");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password : "Mass4Pass#2020",
    database: "digiunity2"
});
db.connect(err=>{
    if(err){
        console.error("error connecting mysql database",err);
    } else {
        console.log('connected to mysql database');
    }
})

module.exports=db;