const connection = require('../config/db.config');

const Itemoperation = {
  selectAll: cb => {
    const queryString =
      "SELECT * FROM itemoperations WHERE 1 LIMIT 50";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectSome: (condition,range,sort,cb) => {
    console.log("MODEL: itemoperations->selectSome");
    const queryString =
    "SELECT * FROM itemoperations  WHERE 1 "+condition+" "+sort+" "+range+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  selectOne: (id, cb) => {
    const queryString =
      "SELECT * FROM itemoperations WHERE id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
 
  getTotal: (cb) => {
    const queryString ="SELECT count(*) as total FROM itemoperations";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
 
  
  deleteSome: (condition, cb) => {
    console.log("deleteSome");
    const queryString = "DELETE FROM itemoperations "+condition+";";
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  },
  
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM itemoperations WHERE id="+id+";";
    connection.query(queryString, function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  },
  
  insert: (vals,cb) => {
    console.log("MODEL: itemoperations->insert");
    console.log(vals);
    const queryString =
    "INSERT INTO itemoperations SET ?";
    console.log(queryString);
    connection.query(queryString, vals,(err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  
   updateOne: (vals, id, cb) => {
    console.log("vals",vals);
    console.log("MODEL itemoperations : updateOne");
    const queryString =
      "UPDATE itemoperations SET ? WHERE id=?;";
    connection.query(queryString, [vals, vals.id], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = Itemoperation;
