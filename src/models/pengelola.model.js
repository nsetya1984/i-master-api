const connection = require('../config/db.config');

const Pengelola = {
  selectAll: cb => {
    const queryString =
      "SELECT * FROM pengelolas WHERE 1 LIMIT 50";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectSome: (condition,sort,range,cb) => {
    console.log("MODEL: pengelolas->selectSome");
    const queryString =
    "SELECT * FROM pengelolas  WHERE 1 "+condition+""+sort+" "+range+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  selectOne: (id, cb) => {
    const queryString =
      "SELECT * FROM pengelolas WHERE id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
 
  getTotal: (cb) => {
    const queryString ="SELECT count(*) as total FROM pengelolas";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
 
  
  deleteSome: (condition, cb) => {
    console.log("deleteSome");
    const queryString = "DELETE FROM pengelolas "+condition+";";
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  },
  
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM pengelolas WHERE id="+id+";";
    connection.query(queryString, function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  },
  
  insert: (vals,cb) => {
    console.log("MODEL: pengelolas->insert");
    console.log(vals);
    const queryString =
    "INSERT INTO pengelolas SET ?";
    console.log(queryString);
    connection.query(queryString, vals,(err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  
   updateOne: (vals, id, cb) => {
    console.log("vals",vals);
    console.log("MODEL pengelolas : updateOne");
    const queryString =
      "UPDATE pengelolas SET ? WHERE id=?;";
    connection.query(queryString, [vals, vals.id], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = Pengelola;
