const connection = require('../config/db.config');

const master_premis = {
  selectAll: cb => {
    const queryString =
      "SELECT * FROM master_data_premis WHERE 1 LIMIT 50";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectSome: (condition,range,cb) => {
    console.log("MODEL: master_data_premis->selectSome");
    const queryString ="SELECT b.*,a.*,c.zon_name FROM `master_data_premis`a LEFT JOIN master_project_category b ON a.id_category=b.category_id LEFT JOIN zons c  ON a.id_zon=c.id_zon WHERE jenis_premis=0  "+condition+" ORDER BY a.id DESC "+range+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  selectOne: (id, cb) => {
    const queryString =
      "SELECT * FROM master_data_premis WHERE id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },


  getTotal: (cb) => {
    const queryString ="SELECT count(*) as total FROM master_data_premis";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },

   getTotalFilter: (key,value,cb) => {
    const queryString ="SELECT count(*) as total FROM master_premis WHERE "+key+"="+value;
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },

  getTotalByCategori: (cb) => {
    const queryString ="SELECT count(*) as total, b.category_name, a.id_category FROM `master_data_premis`a LEFT JOIN master_project_category b ON a.id_category=b.category_id WHERE 1 GROUP BY id_category,category_name";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
 
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM master_data_premis WHERE id=?;";
    connection.execute(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

 deleteSome: (condition,cb) => {
    console.log("MODEL: master_data_premis->deleteSome");
    const queryString ="DELETE FROM master_data_premis  "+condition+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  insertOne: (vals, cb) => {
    console.log("MODEL: master_data_premis->insertOne");
    console.log(vals);
    const queryString =
    "INSERT INTO master_data_premis SET ?";
    console.log(queryString);
    connection.query(queryString, vals,(err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  
   updateOne: (vals, id, cb) => {
    console.log("MODERL master_data_premis updateOne");
    console.log(vals);
    const queryString =
      "UPDATE master_data_premis SET ? WHERE id=?";
    console.log(queryString);

    console.log("Result :");
    connection.query(queryString,[vals,vals.id],function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  }
};

module.exports = master_premis;
