const connection = require('../config/db.config');

const { formatDate } = require('../utils/general');

const Project_hutang = {
  selectAll: cb => {
    const queryString =
      "SELECT * FROM project_hutang WHERE 1 LIMIT 500";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectSome: (condition,range,cb) => {
    console.log("MODEL: project_hutang->selectSome");
    const queryString ="SELECT *FROM `project_hutang`a WHERE 1 "+condition+" ORDER BY id DESC "+range+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  selectOne: (id, cb) => {
    const queryString =
      "SELECT * FROM project_hutang WHERE id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },


  getTotal: (cb) => {
    const queryString ="SELECT count(*) as total FROM project_hutang";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },

getJumlah: (cb) => {
    const queryString ="SELECT SUM(jml_hutang) as total FROM project_hutang";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },


  getTotalByCategori: (cb) => {
    const queryString ="SELECT SUM(jml_hutang) as total, b.asal, a.asal_hutang_id FROM `project_hutang`a LEFT JOIN asal_hutang b ON a.`asal_hutang_id`=b.id WHERE 1 GROUP BY asal_hutang_id,asal";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

   getTotalByPj: (cb) => {
    const queryString ="SELECT SUM(jml_hutang) as total, b.penanggung_jawab, a.penanggung_jawab_id FROM `project_hutang`a LEFT JOIN penanggung_jawab_hutang b ON a.`penanggung_jawab_id`=b.id WHERE 1 GROUP BY penanggung_jawab_id,penanggung_jawab";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },



   getTotalByStatus: (cb) => {
    const queryString ='SELECT name, id, IF(`progress` < 50, "< 50",IF(`progress` > 50 AND `progress` < 100,"> 50", IF(`progress` = 100, "100",""))) as status FROM `project_hutang` WHERE 1 ';
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

   getTotalFilter: (key,value,cb) => {
    const queryString ="SELECT count(*) as total FROM project_hutang WHERE "+key+"="+value;
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },

 
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM project_hutang WHERE id=?;";
    connection.execute(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

 deleteSome: (condition,cb) => {
    console.log("MODEL: project_hutang->deleteSome");
    const queryString ="DELETE FROM project_hutang  "+condition+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  insertOne: (vals, cb) => {
    console.log("MODEL: project_hutang->insertOne");
    console.log(vals);
    const queryString =
    "INSERT INTO project_hutang SET ?";
    console.log(queryString);
    connection.query(queryString, vals,(err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  
   updateOne: (vals, id, cb) => {
    console.log("MODERL project_hutang updateOne");
    console.log(vals);
    vals.tarikh_hutang = formatDate(vals.tarikh_hutang)

    const queryString =
      "UPDATE project_hutang SET ? WHERE id=?";
    console.log(queryString);

    console.log("Result :");
    connection.query(queryString,[vals,vals.id],function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  }
};

module.exports = Project_hutang;
