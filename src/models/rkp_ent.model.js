const connection = require('../config/db.config');

const rkp_ent = {
  selectAll: cb => {
    const queryString =
      "SELECT * FROM rkp_ent WHERE 1 LIMIT 50";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectSome: (condition,range,cb) => {
    console.log("MODEL: rkp_ent->selectSome");
    const queryString ="SELECT * FROM `rkp_ent` WHERE 1 "+condition+" ORDER BY id DESC "+range+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  selectOne: (id, cb) => {
    const queryString =
      "SELECT * FROM rkp_ent WHERE id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },


  getTotal: (cb) => {
    const queryString ="SELECT count(*) as total FROM rkp_ent";
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
    const queryString ="SELECT count(*) as total, b.category_name, a.id_category FROM `rkp_ent`a LEFT JOIN master_project_category b ON a.id_category=b.category_id WHERE 1 GROUP BY id_category,category_name";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
 
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM rkp_ent WHERE id=?;";
    connection.execute(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

 deleteSome: (condition,cb) => {
    console.log("MODEL: rkp_ent->deleteSome");
    const queryString ="DELETE FROM rkp_ent  "+condition+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  insertOne: (vals, cb) => {
    console.log("MODEL: rkp_ent->insertOne");
    console.log(vals);
    const queryString =
    "INSERT INTO rkp_ent SET ?";
    console.log(queryString);
    connection.query(queryString, vals,(err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  
   updateOne: (vals, id, cb) => {
    console.log("MODERL rkp_ent updateOne");
    console.log(vals);
    const queryString =
      "UPDATE rkp_ent SET ? WHERE id=?";
    console.log(queryString);

    console.log("Result :");
    connection.query(queryString,[vals,vals.id],function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  }
};

module.exports = rkp_ent;
