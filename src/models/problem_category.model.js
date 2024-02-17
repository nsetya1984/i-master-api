const connection = require('../config/db.config');

const Problem_category = {
  selectAll: cb => {
    const queryString =
      "SELECT * FROM problem_category WHERE 1 LIMIT 50";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  selectSome: (condition,range,cb) => {
    console.log("MODEL: problem_category->selectSome");
    const queryString ="SELECT * FROM problem_category  WHERE 1 "+condition+" ORDER BY id DESC "+range+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  selectOne: (id, cb) => {
    const queryString =
      "SELECT * FROM problem_category WHERE id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
 
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM problem_category WHERE id=?;";
    connection.execute(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: (vals, cb) => {
    console.log("MODEL: problem_category->insertOne");
    console.log(vals);
    const queryString =
    "INSERT INTO problem_category SET ?";
    console.log(queryString);
    connection.query(queryString, vals,(err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  
   updateOne: (vals, id, cb) => {
    console.log("MODERL problem_category updateOne");
    console.log(vals);
    const queryString =
      "UPDATE problem_category SET ? WHERE id=?";
    console.log(queryString);

    console.log("Result :");
    connection.query(queryString,[vals,vals.id],function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  }
};

module.exports = Problem_category;
