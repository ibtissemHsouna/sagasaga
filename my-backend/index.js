const sql = require('mssql/msnodesqlv8');
//databaseconfiguration
var config={
    user:'amani',//username
    password:'amani',//amani
    database:'Test',//databasename
    server:'LAPTOP-SF47U7UQ',//servername
    driver:'msnodessqlv8',
    options:{
        trustedConnection:true
    }
};

//connect to database

sql.connect(config,function(err){
    if(err){
        console.log(err);

    }
    //create the request object
    var request=new sql.Request();
    //database query
    request.query('select * from categories',function(err,recordSet){
        if(err){
            console.log(err)
        }
        else{
            console.log(recordSet)
        }
    });
});