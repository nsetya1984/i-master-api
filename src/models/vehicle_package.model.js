const connection = require('../config/db.config');

const VehiclePackage = {
  selectAll: cb => {
    const queryString =
      "SELECT * FROM vehicle_package WHERE 1 LIMIT 50";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectSome: (condition,range,cb) => {
    console.log("MODEL: vehicle_package->selectSome");
    console.log("condition -->",condition);

    const queryString =
    "SELECT *,  CONCAT(tariff_type,'(',package_name, ')') as  type_package FROM vehicle_package WHERE 1 "+condition+" "+range+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  selectOne: (id, cb) => {
    const queryString =
      "SELECT * FROM vehicle_package WHERE id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
 
 
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM vehicle_package WHERE id=?;";
    connection.execute(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  
  insertOne: (vals, cb) => {
    console.log("MODEL: vehicle_package->insert");
    console.log(vals);
    const queryString =
    "INSERT INTO vehicle_package SET ?";
    console.log(queryString);
    connection.query(queryString, vals,(err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  
  updateOne: (vals, id, cb) => {
    console.log("vals",vals);
    console.log("MODEL vehicle_package : updateOne");
    const queryString =
      "UPDATE vehicle_package SET ? WHERE id=?;";
    connection.query(queryString, [vals, vals.id], function (err, result) {
      if (err) throw err;
      cb(result);
    });
    
  }
};

module.exports = VehiclePackage;
