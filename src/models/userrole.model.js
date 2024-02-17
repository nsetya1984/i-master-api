const connection = require('../config/db.config');

const Userrole = {
  selectAll: cb => {
    const queryString =
      "SELECT * FROM user_role WHERE 1 LIMIT 50";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectSome:(condition,range,sort,cb) => {
    console.log("MODEL: user_role->selectSome");
    range="LIMIT 10"
    const queryString ="SELECT * FROM user_role  WHERE 1 "+condition+" "+range+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  selectOne: (id, cb) => {
    const queryString =
      "SELECT * FROM user_role WHERE id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
 
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM user_role WHERE id=?;";
    connection.execute(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: (vals, cb) => {
    console.log("MODEL: user_role->insertOne");
    console.log(vals);
    const queryString =
    "INSERT INTO user_role SET ?";
    console.log(queryString);
    connection.query(queryString, vals,(err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  
   updateOne: (vals, id, cb) => {
    console.log("MODERL user_role updateOne");
    console.log(vals);
    const queryString =
      "UPDATE user_role SET ? WHERE id=?";
    console.log(queryString);

    console.log("Result :");
    connection.query(queryString,[vals,vals.id],function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  }
};

module.exports = Userrole;
