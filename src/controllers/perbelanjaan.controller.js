const db = require('../models/index.js')

module.exports = {

  create: (req, res) => {
    console.log("=Outlet =create==");
    console.log(req.body);
    db.Keuangan.insert(req.body, result => {
      res.json({ id: result.insertId })
    })

  },
  getAll: (req, res) => {
    db.Perbelanjaan.selectAll(data => {
      res.json(data)
    })
  },
  getSomeByKeuanganId: (req, res) => {
    console.log("KEUANGAN ==>getSomeByKeuanganId");
    console.log(req.params);
    console.log(req.query);
    console.log(typeof req.query.sort );

    var condition   =" AND keuangan_id="+req.params.keuangan_id;
    var strCondition=" AND ";
    var sort       =" ORDER BY tanggal ASC";
    var limit    =" LIMIT 100";

 
    if (typeof req.query.filter == "object") {
       var filters=JSON.parse(req.query.filter);
       Object.entries(filters).forEach(([key, value]) => {  
        if(key==='id')
          strCondition=strCondition+` ${key} = '${value}' AND `
        else
          strCondition=strCondition+` ${key} LIKE '%${value}%' AND `
      })
      condition = strCondition.substring(0, strCondition.length - 4);
    }

    if (typeof req.query.range == 'object')
    {
      var rangeObject=JSON.parse(req.query.range);
      console.log(rangeObject)
    
      var strRange="";
      rangeObject.forEach((key) => {  
          strRange = strRange+" "+key +","
      })
    
      limit = strRange.substring(0, strRange.length - 1);
      limit="LIMIT "+limit;
  
    }

    if (typeof req.query.sort == 'string')
    {
      console.log("typeof req.query.sort",req.query.sort)
      var sortObject=JSON.parse(req.query.sort);
      console.log(sortObject)

      var strObject="ORDER BY ";
      sortObject.forEach((key) => {  
          strObject = strObject+" "+key +""
      })
    
      sort = strObject
   
    }

    console.log(condition);
    db.Perbelanjaan.selectSome(condition,limit,sort, data => {
      res.json(data)
    });


  },

  getTotal: (req, res) => {
    console.log("==getTotal==");
    db.Perbelanjaan.getTotal(data => {
      res.json(data)
    })
  }
}
