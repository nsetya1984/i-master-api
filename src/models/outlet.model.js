const connection = require('../config/db.config');

const Outlet = {
  selectAll: cb => {
    const queryString =
      "SELECT * FROM outlets WHERE 1 LIMIT 50";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
   selectSome: (condition,sort,range,cb) => {
    console.log("MODEL: pengelolas->selectSome");
    const queryString =
    "SELECT *,CONCAT(no_unit_usaha,'-',unit_usaha,'') as no_unitusaha FROM outlets  WHERE 1 "+condition+""+sort+" "+range+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },

  selectOneWithReference: (id, cb) => {
    const queryString =
      "SELECT o.*, i.no_rekening as no_rekening_investor,i.nama_rekening as nama_rekening_investor,i.bank as bank_investor,i.nama as nama_investor,p.no_rekening as no_rekening_pengelola,p.nama  as nama_rekening_pengelola,p.bank as bank_pengelola, p.nama as nama_pengelola FROM outlets o LEFT JOIN pengelolas p ON o.pengelola_id=p.id LEFT JOIN investors i ON o.investor_id=i.id WHERE o.id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
  selectOne: (id, cb) => {
    const queryString =
      "SELECT * FROM outlets WHERE id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },


  getTotal: (cb) => {
    const queryString ="SELECT count(*) as total FROM outlets";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
 
  
  deleteSome: (condition, cb) => {
    console.log("deleteSome");
    const queryString = "DELETE FROM outlets "+condition+";";
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  },
  
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM outlets WHERE id="+id+";";
    connection.query(queryString, function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  },
  
  insert: (vals,cb) => {
    console.log("MODEL: outlets->insert");
    console.log(vals);
    const queryString =
    "INSERT INTO outlets SET "+
    "no_unit_usaha='"+vals.no_unit_usaha+"', "+
    "unit_usaha='"+vals.unit_usaha+"', "+
    "alamat='"+vals.alamat+"', "+
    "no_telp='"+vals.no_telp+"', "+
    "investor_id='"+vals.investor_id+"', "+
    "pengelola_id='"+vals.pengelola_id+"', " +
    "revenu_sharing_investor='"+vals.revenu_sharing_investor+"', "+
    "revenu_sharing_pengelola='"+vals.revenu_sharing_pengelola+"', "+
    "revenu_sharing_admin='"+vals.revenu_sharing_admin+"', "+
    "sewa_ruko='"+vals.sewa_ruko+"', "+
    "user_id='"+vals.user_id+"'"
    ;
    console.log(queryString);
    connection.query(queryString, vals,(err, results) => {
      if (err) throw err;
      cb(results);
      console.log("insert Outlet->results",results.insertId);
      // cb(results);
      /*
      connection.query(queryString, [vals, vals.id], function (err2, result2) {
      if (err2) throw err2;
         cb(results);
      });
      */

    });
  },
  
   updateOne: (vals, id, cb) => {
    console.log("vals",vals);
    console.log("MODEL outlets : updateOne");
    const queryString =
      "UPDATE outlets SET ? WHERE id=?;";
    connection.query(queryString, [vals, vals.id], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = Outlet;
