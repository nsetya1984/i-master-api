const connection = require('../config/db.config');

const User = {
  selectAll: cb => {
    const queryString =
      "SELECT * FROM user WHERE 1 LIMIT 50";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectSome: (condition,range,cb) => {
    console.log("MODEL: user->selectSome");
    const queryString ="SELECT * FROM user  WHERE 1 "+condition+" ORDER BY id DESC "+range+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  selectOne: (id, cb) => {
    const queryString =
      "SELECT * FROM user WHERE id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
 
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM user WHERE id=?;";
    connection.execute(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  login: (vals, cb) => {
    console.log("MODEL: user->login");
    const queryString =
      "SELECT * FROM user WHERE username='"+vals.username+"'";
    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },

  insertOne: (vals, cb) => {
    console.log("MODEL: user->insertOne");
    console.log(vals);
    const queryString =
    "INSERT INTO user SET ?";
    console.log(queryString);
    connection.query(queryString, vals,(err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  
   updateOne: (vals, id, cb) => {
    console.log("MODERL user updateOne");
    console.log(vals);
    const queryString =
      "UPDATE user SET ? WHERE id=?";
    console.log(queryString);

    console.log("Result :");
    connection.query(queryString,[vals,vals.id],function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  }
};

module.exports = User;
