const connection = require('../config/db.config');

const Staff = {
  selectAll: cb => {
    const queryString =
      "SELECT * FROM master_data_staff_premis WHERE 1 LIMIT 50";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectSome: (condition,range,cb) => {
    console.log("MODEL: Staff master_data_staff_premis->selectSome");
    const queryString ="SELECT b.*, c.*,a.*, a.id_staff as id FROM `master_data_staff_premis` a  LEFT JOIN  master_data_staff c  ON a.id_staff=c.id_number  LEFT JOIN master_data_jawatan b ON a.id_jawatan=b.id WHERE 1 "+condition+"  "+range+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  selectOne: (id, cb) => {
    const queryString =
      "SELECT a.*,c.* FROM `master_data_staff_premis` a  LEFT JOIN master_data_staff c  ON a.id_staff=c.id_number WHERE a.id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },


  getTotal: (cb) => {
    const queryString ="SELECT count(*) as total FROM master_data_staff_premis";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },

 
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM master_data_staff_premis WHERE id_staff=?;";
    connection.execute(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

 deleteSome: (condition,cb) => {
    console.log("MODEL: master_data_staff_premis->deleteSome");
    const queryString ="DELETE FROM master_data_staff_premis  "+condition+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  insertOne: (vals, cb) => {
    console.log("MODEL: master_data_staff_premis->insertOne");
    console.log(vals);
    const queryString =
    "INSERT INTO master_data_staff_premis SET ?";
    console.log(queryString);
    connection.query(queryString, vals,(err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  
   updateOne: (vals, id, cb) => {
    console.log("MODERL master_data_staff_premis updateOne");
    const queryString =
      "UPDATE master_data_staff_premis SET ? WHERE id_staff=?";
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
