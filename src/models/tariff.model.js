const connection = require('../config/db.config');

const Tariff = {
  selectAll: cb => {
    const queryString =
      "SELECT * FROM tariff WHERE 1 LIMIT 50";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectSome: (condition,range,cb) => {
    console.log("MODEL: tariff->selectSome");
    range="LIMIT 10"
    const queryString ="SELECT * , CONCAT(tariff_name,'(',tariff_price,')') as name_price FROM tariff  WHERE 1 "+condition+" "+range+" ";
    console.log(queryString);
    
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  selectOne: (id, cb) => {
    const queryString =
      "SELECT * FROM tariff WHERE id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
 
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM tariff WHERE id=?;";
    connection.execute(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: (vals, cb) => {
    console.log("MODEL: Tariff->insertOne");
    console.log(vals);
    const queryString =
    "INSERT INTO tariff SET ?";
    console.log(queryString);
    connection.query(queryString, vals,(err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  
   updateOne: (vals, id, cb) => {
    console.log("MODERL tariff updateOne");
    console.log(id);
    console.log(vals);
    const queryString =
      "UPDATE tariff SET tariff_type_id='"+vals.tariff_type_id+"',city_id='"+vals.city_id+"',tariff_name='"+vals.tariff_name+"',tariff_price='"+vals.tariff_price+"',tariff_discount_price='"+vals.tariff_discount_price+"' ,tariff_desc='"+vals.tariff_desc+"', vehicle_id='"+vals.vehicle_id+"' WHERE id='"+vals.id+"' ";
    console.log(queryString);

    console.log("Result :");
    connection.query(queryString, function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  }
};

module.exports = Tariff;
