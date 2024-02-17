const connection = require('../config/db.config');

const Driver = {
  selectAll: cb => {
    const queryString =
      "SELECT * FROM driver WHERE 1 LIMIT 50";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectSome: (condition,range,cb) => {
    console.log("MODEL: driver->selectSome");
    range="LIMIT 10"
    const queryString ="SELECT * FROM driver  WHERE 1 "+condition+" "+range+" ";
    console.log(queryString);
    
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  selectOne: (id, cb) => {
    const queryString =
      "SELECT * FROM driver WHERE id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
 
  deleteSome: (condition, cb) => {
    console.log("deleteSome");
    const queryString = "DELETE FROM driver "+condition+";";
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  },
  
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM driver WHERE id="+id+";";
    connection.query(queryString, function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  },
  

  insertOne: (vals, cb) => {
    console.log("MODEL: driver->insertOne");
    console.log(vals);
    const queryString =
    "INSERT INTO driver SET ?";
    console.log(queryString);
    connection.query(queryString, vals,(err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  
   updateOne: (vals, id, cb) => {
    console.log("MODEL driver updateOne");
    console.log(id);
    console.log(vals);
    const queryString =
      "UPDATE driver SET driver_type_id='"+vals.driver_type_id+"',city_id='"+vals.city_id+"',driver_name='"+vals.driver_name+"',driver_price='"+vals.driver_price+"',driver_discount_price='"+vals.driver_discount_price+"' ,driver_desc='"+vals.driver_desc+"', vehicle_id='"+vals.vehicle_id+"' WHERE id='"+vals.id+"' ";
    console.log(queryString);

    console.log("Result :");
    connection.query(queryString, function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  }
};

module.exports = Driver;
