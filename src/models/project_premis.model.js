const connection = require('../config/db.config');

const Project_premis = {
  selectAll: cb => {
    const queryString =
      "SELECT * FROM project_premis WHERE 1 LIMIT 50";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectSome: (condition,range,cb) => {
    console.log("MODEL: project_premis->selectSome");
    const queryString ="SELECT b.*, a.* FROM `project_premis`a LEFT JOIN project_category b ON a.`kategori_id`=b.id WHERE 1 "+condition+" ORDER BY a.id DESC "+range+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  selectOne: (id, cb) => {
    const queryString =
      "SELECT * FROM project_premis WHERE id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },


  getTotal: (cb) => {
    const queryString ="SELECT count(*) as total FROM project_premis";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },

   getTotalFilter: (key,value,cb) => {
    const queryString ="SELECT count(*) as total FROM project_premis WHERE "+key+"="+value;
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },

  getTotalByCategori: (cb) => {
    const queryString ="SELECT count(*) as total, b.category_name, a.kategori_id FROM `project_premis`a LEFT JOIN project_category b ON a.`kategori_id`=b.id WHERE 1 GROUP BY kategori_id,category_name";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
 
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM project_premis WHERE id=?;";
    connection.execute(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

 deleteSome: (condition,cb) => {
    console.log("MODEL: project_premis->deleteSome");
    const queryString ="DELETE FROM project_premis  "+condition+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  insertOne: (vals, cb) => {
    console.log("MODEL: project_premis->insertOne");
    console.log(vals);
    const queryString =
    "INSERT INTO project_premis SET ?";
    console.log(queryString);
    connection.query(queryString, vals,(err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  
   updateOne: (vals, id, cb) => {
    console.log("MODERL project_premis updateOne");
    console.log(vals);
    const queryString =
      "UPDATE project_premis SET ? WHERE id=?";
    console.log(queryString);

    console.log("Result :");
    connection.query(queryString,[vals,vals.id],function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  }
};

module.exports = Project_premis;
