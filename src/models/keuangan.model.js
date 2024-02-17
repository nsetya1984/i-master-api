const connection = require('../config/db.config');

const Keuangan = {
  selectAll: cb => {
    const queryString =
      "SELECT * FROM keuangans WHERE 1 LIMIT 50";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectOneAndItem: (id, cb) => {
    const queryString =
      "SELECT keuangans.*, periodes.* FROM keuangans LEFT JOIN periodes ON keuangans.periode_id=periodes.id  WHERE keuangans.id=?;";
      console.log(queryString);
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },

  selectSome: (condition,range,sort,cb) => {
    console.log("MODEL: keuangans->selectSome");
    const queryString =
    "SELECT *, IFNULL(`pendapatan`,0) AS pendapatan, IFNULL(`grabfood`,0) AS grabfood, IFNULL(`gofood`,0) AS gofood,IFNULL(`shopeefood`,0) AS shopeefood,IFNULL(`pesanan`,0) AS pesanan, k.id as keuangan_id,FORMAT(belanja,0) as belanja_format,FORMAT(beras,0) as beras_format, (k.pendapatan+k.grabfood) as total_jualan, DATE_FORMAT(tanggal, '%d-%m-%Y') as tanggal_format, CONCAT(o.no_unit_usaha,'-',o.unit_usaha,'') as no_unitusaha FROM keuangans k  LEFT JOIN outlets o ON k.outlet_id=o.id WHERE 1 "+condition+" "+sort+" "+range+" ";
    console.log(queryString);
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },


  selectOne: (id, cb) => {
    const queryString =
      "SELECT * FROM keuangans WHERE id=?;";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
 
  getTotal: (periode_id,cb) => {
    const queryString ="SELECT SUM(pendapatan+grabfood+shopeefood+pesanan) as total_omset FROM `keuangans` WHERE periode_id=?;";
    console.log(queryString)
    connection.query(queryString, [periode_id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
  getTotalByOutletByPeriode: (periode_id,outlet_id,cb) => {
    const queryString ="SELECT SUM(pendapatan+grabfood+shopeefood+pesanan) as total_omset FROM `keuangans` WHERE periode_id=? AND outlet_id=?;";
    console.log(queryString)
    connection.query(queryString, [periode_id,outlet_id], (err, result) => {
      if (err) throw err;
      cb(result[0]);
    });
  },
//TotalOmsetDaily
   getTopTenByPeriode: (periode_id,cb) => {
    const queryString ="SELECT outlets.id,outlets.no_unit_usaha, outlets.unit_usaha,SUM(pendapatan+grabfood+shopeefood+pesanan) as total_omset FROM `keuangans` LEFT JOIN outlets ON keuangans.outlet_id=outlets.id WHERE periode_id=? GROUP BY outlets.id, outlets.no_unit_usaha, outlets.unit_usaha ORDER BY total_omset DESC LIMIT 10;  ";
    console.log(queryString)
    connection.query(queryString, [periode_id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  getDailyTotalOmsetByPeriode: (periode_id,cb) => {
    const queryString ="SELECT DATE_FORMAT(keuangans.tanggal, '%d-%m-%Y') as tanggal_format,SUM(pendapatan+grabfood+shopeefood+pesanan) as total, SUM(pendapatan+grabfood+shopeefood+pesanan) as total_omset FROM `keuangans` LEFT JOIN outlets ON keuangans.outlet_id=outlets.id WHERE periode_id=? GROUP BY keuangans.tanggal ORDER BY tanggal DESC ";
    console.log(queryString)
    connection.query(queryString, [periode_id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  getDailyTotalOmsetByPeriodeByOutlet: (periode_id,outlet_id,cb) => {
    const queryString ="SELECT DATE_FORMAT(keuangans.tanggal, '%d-%m-%Y') as tanggal_format,SUM(pendapatan+grabfood+shopeefood+pesanan) as total, FORMAT(SUM(pendapatan+grabfood+shopeefood+pesanan),0) as total_omset FROM `keuangans` LEFT JOIN outlets ON keuangans.outlet_id=outlets.id WHERE periode_id="+periode_id+" AND  outlet_id="+outlet_id+" GROUP BY keuangans.tanggal ORDER BY tanggal DESC ";
    console.log(queryString)
    connection.query(queryString, [periode_id,outlet_id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

 
  
  deleteSome: (condition, cb) => {
    console.log("deleteSome");
    const queryString = "DELETE FROM keuangans "+condition+";";
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  },
  
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM keuangans WHERE id="+id+";";
    connection.query(queryString, function (err, result) {
      console.log(result);
     if (err) throw err;
      cb(result);
    });
  },
  
  insert: (vals,cb) => {
    console.log("MODEL: keuangans->insert");
    console.log(vals);
    const queryString =
    "INSERT INTO keuangans SET ?";
    console.log(queryString);
    connection.query(queryString, vals,(err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  
  updateOne: (vals, id, cb) => {
    console.log("vals",vals);
    console.log("MODEL keuangans : updateOne");
    const queryString =
      "UPDATE keuangans SET ? WHERE id=?;";
    connection.query(queryString, [vals, vals.id], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
   updateByIdAndItem: (vals, id, cb) => {
    console.log("vals",vals);
    console.log("MODEL keuangans : updateOne");
    var itemBelanja=vals.itemBelanja;
    delete vals.itemBelanja;
    console.log("after delete item belanja",vals);
   
    const queryString =
      "UPDATE keuangans SET ? WHERE id=?;";
    connection.query(queryString, [vals, vals.id], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  

};

module.exports = Keuangan;
