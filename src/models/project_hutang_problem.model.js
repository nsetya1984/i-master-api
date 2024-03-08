const connection = require('../config/db.config');

const Project_hutang_problem = {
  selectAll: cb => {
    const queryString =
      "SELECT * FROM Project_hutang_problem WHERE 1 LIMIT 50";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectSome: (condition,range,cb) => {
    console.log("MODEL: Project_hutang_problem->selectSome");
    const queryString ="SELECT * FROM project_hutang_problem  WHERE 1 "+condition+" ORDER BY id DESC "+range+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

selectJoin: (condition,range,cb) => {
    console.log("MODEL: Project_hutang_problem->selectJoin");
    const queryString = 
      "SELECT b.*, a.* FROM project_hutang_problem as a LEFT JOIN project_hutang as b ON a.project_hutang_id=b.id  WHERE 1 "+condition+" ORDER BY a.id DESC "+range+"";
     console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectOne: (id, cb) => {
    const queryString =
      "SELECT * FROM project_hutang_problem WHERE id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
 

  getTotal: (cb) => {
    const queryString ="SELECT count(*) as total FROM project_hutang_problem";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },

   getTotalFilter: (key,value,cb) => {
    const queryString ="SELECT count(*) as total FROM project_hutang_problem a LEFT JOIN project_hutang b ON a.project_hutang_id=b.id WHERE b."+key+"="+value;
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },

 
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM project_hutang_problem WHERE id=?;";
    connection.execute(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },


 deleteSome: (condition,cb) => {
    console.log("MODEL: Project_hutang_problem->deleteSome");
    const queryString ="DELETE FROM project_hutang_problem  "+condition+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },



  insertOne: (vals, cb) => {
    console.log("MODEL: project_hutang_problem->insertOne");
    console.log(vals);
    const queryString =
    "INSERT INTO project_hutang_problem SET ?";
    console.log(queryString);
    connection.query(queryString, vals,(err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  
   updateOne: (vals, id, cb) => {
    console.log("MODERL project_hutang_problem updateOne");
    console.log(vals);
    const queryString =
      "UPDATE project_hutang_problem SET ? WHERE id=?";
    console.log(queryString);

    console.log("Result :");
    connection.query(queryString,[vals,vals.id],function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  }
};

module.exports = Project_hutang_problem;
