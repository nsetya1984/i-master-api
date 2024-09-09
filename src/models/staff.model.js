const connection = require('../config/db.config');

const Staff = {
  selectAll: cb => {
    const queryString =
      "SELECT * FROM master_data_staff WHERE 1 LIMIT 50";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectSome: (condition,range,cb) => {
    console.log("MODEL: Staff master_data_staff->selectSome");
    const queryString ="SELECT a.*,c.zon_name, a.id_number as id FROM `master_data_staff` a  LEFT JOIN zons c  ON a.id_zon=c.id_zon WHERE 1 "+condition+"  "+range+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  selectOne: (id, cb) => {
    const queryString =
      "SELECT a.*,c.zon_name,a.id_number as id FROM `master_data_staff` a  LEFT JOIN zons c  ON a.id_zon=c.id_zon WHERE a.id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },


  getTotal: (cb) => {
    const queryString ="SELECT count(*) as total FROM master_data_staff";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },

 
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM master_data_staff WHERE id=?;";
    connection.execute(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

 deleteSome: (condition,cb) => {
    console.log("MODEL: master_data_staff->deleteSome");
    const queryString ="DELETE FROM master_data_staff  "+condition+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  insertOne: (vals, cb) => {
    console.log("MODEL: master_data_staff->insertOne");
    vals.jenis_premis =2;
    console.log(vals);
    const queryString =
    "INSERT INTO master_data_staff SET ?";
    console.log(queryString);
    connection.query(queryString, vals,(err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  
   updateOne: (vals, id, cb) => {
    console.log("MODERL master_data_staff updateOne");
    const queryString =
      "UPDATE master_data_staff SET ? WHERE id=?";
    console.log(queryString);

    console.log("Result :");
    connection.query(queryString,[vals,vals.id],function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  }
};

module.exports = Staff;
