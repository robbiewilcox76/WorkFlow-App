const mysql = require('mysql2');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'booty911',
  database: 'restdb'
});

function executeQuery(query, params = []) {
    return new Promise((resolve, reject) => {
      pool.query(query, params, (error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  }
  
  module.exports = {
    executeQuery
  };
