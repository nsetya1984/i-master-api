const connection = require('../config/db.config');

const project_keuangan = {
  selectAll: cb => {
    const queryString =
      "SELECT * FROM project_keuangan WHERE 1 LIMIT 50";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectSome: (condition,range,cb) => {
    console.log("MODEL: project_keuangan->selectSome");
    const queryString ="SELECT * FROM project_keuangan  WHERE 1 "+condition+" ORDER BY id DESC "+range+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  selectOne: (id, cb) => {
    const queryString =
      "SELECT * FROM project_keuangan WHERE id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
 
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM project_keuangan WHERE id=?;";
    connection.execute(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },


 deleteSome: (condition,cb) => {
    console.log("MODEL: project_keuangan->deleteSome");
    const queryString ="DELETE FROM project_keuangan  "+condition+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },



  insertOne: (vals, cb) => {
    console.log("MODEL: project_keuangan->insertOne");
    console.log(vals);
    const queryString =
    "INSERT INTO project_keuangan SET ?";
    console.log(queryString);
    connection.query(queryString, vals,(err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  
   updateOne: (vals, id, cb) => {
    console.log("MODERL project_keuangan updateOne");
    console.log(vals);
    const queryString =
      "UPDATE project_keuangan SET ? WHERE id=?";
    console.log(queryString);

    console.log("Result :");
    connection.query(queryString,[vals,vals.id],function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  }
};

module.exports = project_keuangan;
