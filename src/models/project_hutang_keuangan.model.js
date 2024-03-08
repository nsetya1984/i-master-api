const connection = require('../config/db.config');

const Project_hutang_keuangan = {
  selectAll: cb => {
    const queryString =
      "SELECT * FROM project_hutang_keuangan WHERE 1 LIMIT 50";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectSome: (condition,range,cb) => {
    console.log("MODEL: project_hutang_keuangan->selectSome");
    const queryString ="SELECT * FROM project_hutang_keuangan  WHERE 1 "+condition+" ORDER BY id DESC "+range+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  selectOne: (id, cb) => {
    const queryString =
      "SELECT * FROM project_hutang_keuangan WHERE id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
 
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM project_hutang_keuangan WHERE id=?;";
    connection.execute(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },


 deleteSome: (condition,cb) => {
    console.log("MODEL: project_hutang_keuangan->deleteSome");
    const queryString ="DELETE FROM project_hutang_keuangan  "+condition+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },



  getTotal: (cb) => {
    const queryString ="SELECT SUM(pembayaran) as total FROM project_hutang_keuangan";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },


  getTotalFilter: (key,value,cb) => {
    const queryString ="SELECT SUM(pembayaran) as total FROM project_hutang_keuangan a LEFT JOIN project_hutang b ON a.project_hutang_id=b.id WHERE b."+key+"="+value+" ";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },


  getTopFilter: (key,value, cb) => {
    const queryString ="SELECT SUM(pembayaran) as total, b.id,b.name FROM `project_hutang_keuangan`  a LEFT JOIN project_premis b ON a.premis_id=b.id WHERE b."+key+"="+value+" GROUP BY  b.id,b.name";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
 


  getTotalDaily: (cb) => {
    const queryString ="SELECT SUM(pembayaran) as total, tarikh, name FROM `project_hutang_keuangan`  a LEFT JOIN project_hutang b ON a.project_hutang_id=b.id GROUP BY tarikh";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
 


  getTotalDailyFilter: (key,value,cb) => {
    const queryString ="SELECT SUM(jualan) as total,tarikh FROM project_hutang_keuangan a LEFT JOIN project_premis b ON a.premis_id=b.id WHERE b."+key+"="+value+" GROUP BY tarikh";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

 
  getTotalByCategori: (cb) => {
    const queryString ="SELECT SUM(hutang) as total, b.cat_name, a.problem_cat_id FROM `project_problem`a LEFT JOIN problem_category b ON a.`problem_cat_id`=b.id WHERE 1 GROUP BY problem_cat_id,cat_name";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },



  insertOne: (vals, cb) => {
    console.log("MODEL: project_hutang_keuangan->insertOne");
    console.log(vals);
    const queryString =
    "INSERT INTO project_hutang_keuangan SET ?";
    console.log(queryString);
    connection.query(queryString, vals,(err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  
   updateOne: (vals, id, cb) => {
    console.log("MODERL project_hutang_keuangan updateOne");
    console.log(vals);
    const queryString =
      "UPDATE project_hutang_keuangan SET ? WHERE id=?";
    console.log(queryString);

    console.log("Result :");
    connection.query(queryString,[vals,vals.id],function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  }
};

module.exports = Project_hutang_keuangan;
