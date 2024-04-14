// Include packages needed for this application
const mysql = require('mysql2');

// our DB config --> HOW we connect (and to w0aht DB)
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'business_db'
});

// this is the connection 
connection.connect(function(error) {
    if(error) {
        console.log("Error: ", error);
        throw error
    }
     console.log("DB connected...");
})

module.exports = connection;