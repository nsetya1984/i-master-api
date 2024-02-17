const connection = require('../config/db.config');

const Operations = {
  selectAll: cb => {
    const queryString =
      "SELECT * FROM operations WHERE 1 LIMIT 50";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectSome: (condition,range,sort,cb) => {
    console.log("MODEL: operations->selectSome");
    const queryString =
    "SELECT itemoperations.*, operations.* , outlets.*, FORMAT(operations.isi_satuan,0) as isi_satuan_format FROM operations LEFT JOIN itemoperations ON operations.operation_id=itemoperations.id LEFT JOIN outlets ON operations.outlet_id=outlets.id WHERE 1 "+condition+"  "+range+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  selectOne: (id, cb) => {
    const queryString =
      "SELECT * FROM operations WHERE id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
 
  getTotal: (cb) => {
    const queryString ="SELECT count(*) as total FROM operations";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
 
  
  deleteSome: (condition, cb) => {
    console.log("deleteSome");
    const queryString = "DELETE FROM operations "+condition+";";
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  },
  
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM operations WHERE id="+id+";";
    connection.query(queryString, function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  },
  
  insert: (vals,cb) => {
    console.log("MODEL: operations->insert");
    console.log(vals);
    const queryString =
    "INSERT INTO operations SET ?";
    console.log(queryString);
    connection.query(queryString, vals,(err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  
   updateOne: (vals, id, cb) => {
    console.log("vals",vals);
    console.log("MODEL operations : updateOne");
    const queryString =
      "UPDATE operations SET ? WHERE id=?;";
    connection.query(queryString, [vals, vals.id], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = Operations;
