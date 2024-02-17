const connection = require('../config/db.config');

const Perbelanjaan = {
  selectAll: cb => {
    const queryString =
      "SELECT * FROM perbelanjaans WHERE 1 LIMIT 50";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectSome: (condition,range,sort,cb) => {
    console.log("MODEL: perbelanjaans->selectSome");
    const queryString =
    "SELECT p.*, ib.*, DATE_FORMAT(tanggal, '%d-%m-%Y') as tanggal_format  FROM perbelanjaans  p LEFT JOIN itembelanjas ib ON p.item_belanja_id=ib.id WHERE 1 "+condition+" "+sort+" "+range+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },


  selectByKeuanganId: (keuangan_id, cb) => {
    const queryString =
      "SELECT * FROM perbelanjaans a LEFT JOIN itembelanjas b ON  a.item_belanja_id=b.id WHERE keuangan_id=?;";
    connection.query(queryString, [keuangan_id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
 
  selectOne: (id, cb) => {
    const queryString =
      "SELECT * FROM perbelanjaans WHERE id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
 
  getTotal: (cb) => {
    const queryString ="SELECT count(*) as total FROM perbelanjaans";
    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
 
  
  deleteSome: (condition, cb) => {
    console.log("deleteSome");
    const queryString = "DELETE FROM perbelanjaans "+condition+";";
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  },
  
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM perbelanjaans WHERE id="+id+";";
    connection.query(queryString, function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  },
  
  insert: (vals,cb) => {
    console.log("MODEL: perbelanjaans->insert");
    console.log(vals);
    const queryString =
    "INSERT INTO perbelanjaans SET ?";
    console.log(queryString);
    connection.query(queryString, vals,(err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  
   updateOne: (vals, id, cb) => {
    console.log("vals",vals);
    console.log("MODEL perbelanjaans : updateOne");
    const queryString =
      "UPDATE perbelanjaans SET ? WHERE id=?;";
    connection.query(queryString, [vals, vals.id], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
   updateByIdKeuanganId: (vals, id,itemId, cb) => {
    console.log("vals",vals);
    console.log("id",id);
    itemId = itemId.replace ( /[^\d.]/g, '' );
    console.log("itemId",itemId);
    
    console.log("MODEL perbelanjaans : updateByIdKeuanganId");
    const queryString =
      "UPDATE perbelanjaans SET ? WHERE keuangan_id="+id+" AND item_belanja_id="+itemId+" ;";
      console.log();
    connection.query(queryString, [vals], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = Perbelanjaan;
