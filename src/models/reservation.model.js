const connection = require('../config/db.config');

const Reservation = {
  selectAll: cb => {
    const queryString =
      "SELECT * FROM reservation WHERE 1 LIMIT 50";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectSome: (condition,range,cb) => {
    console.log("MODEL: queryString->selectSome");
    const queryString =
    "SELECT * FROM reservation WHERE 1 "+condition+" "+range+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  selectOne: (id, cb) => {
    const queryString =
      "SELECT * FROM reservation WHERE id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
 
 
  deleteSome: (condition, cb) => {
    console.log("deleteSome");
    const queryString = "DELETE FROM reservation "+condition+";";
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  },
  
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM reservation WHERE id="+id+";";
    connection.query(queryString, function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  },
  
  insertOne: (vals,cb) => {
    console.log("MODEL: reservation->insert");
    console.log(vals);
    const queryString =
    "INSERT INTO reservation SET ?";
    console.log(queryString);
    connection.query(queryString, vals,(err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  
  updateOne: (vals, id, cb) => {
    console.log("vals",vals);
    console.log("MODEL reservation : updateOne");
    vals.pickup_date=(new Date(vals.pickup_date)).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
    vals.dropoff_date=(new Date(vals.dropoff_date)).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
  
    const queryString =
      "UPDATE reservation SET ? WHERE id=?;";
    connection.query(queryString, [vals, vals.id], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  }

};

module.exports = Reservation;
