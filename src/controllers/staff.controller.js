const db = require('../models/index.js')
module.exports = {

  create: (req, res) => {
    console.log("=Tariff =create==");
    console.log(req.body);
    db.Staff.insertOne(req.body, result => {
      res.json({ id: result.insertId })
    })

  },

  getAll: (req, res) => {
    db.Staff.selectAll(data => {
      res.json(data)
    })
  },
  getSome: (req, res) => {
    console.log("getSome");
    console.log(req.query);
    
    var filters=JSON.parse(req.query.filter);
    var condition=" ";
    var strCondition=" AND ";
    var limit=" LIMIT 100";
 
    Object.entries(filters).forEach(([key, value]) => {  
      if(key==='id_zon')
        strCondition=strCondition+" a."+` ${key} = '${value}' AND `
      if(key==='q')
        strCondition=strCondition+" a.nama_lengkap"+` LIKE '%${value}%' AND `
      else
        strCondition=strCondition+` ${key} LIKE '%${value}%' AND `
    })
    condition = strCondition.substring(0, strCondition.length - 4);
    

    if (typeof req.query.range == 'string')
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

    console.log(condition);
    console.log(limit);
    
    db.Staff.selectSome(condition,limit, data => {
      res.json(data)
    });

  },
  getTotal: (req, res) => {
    console.log("==getTotal==");
    console.log(req.params);
    db.Staff.getTotal(data => {
      res.json(data)
    })
  },


  createNew: (req, res) => {
    db.Staff.insertOne(req.body.vals, result => {
      res.json({ id: result.insertId })
    })
  },
  login: (req, res) => {
    console.log("req.body",req.body);
    db.Staff.login(req.body, data => {
      res.json(data)
    });
  },

  

  getSatffByZonId: (req, res) => {
    console.log("==getPremisByZonId==");
    console.log(req.params);
    var limit=" LIMIT 100";
    var condition=" AND a.id_zon= "+ req.params.id_zon+ "";
    db.Staff.selectSome(condition,limit, data => {
      res.json(data)
    });

  },

  getById: (req, res) => {
    console.log("==getById==");
    db.Staff.selectOne(req.params.id, data => {
      res.json(data)
    })
  },
  updateById: (req, res) => {
    db.Staff.updateOne(req.body, req.params.id, result => {
    
    })
  },
  deleteSome: (req, res) => {
    console.log("deleteSome");
    console.log(req.query);
    var filters=JSON.parse(req.query.filter);
   
    
    var condition=" WHERE id IN (";
    var strCondition="";
    Object.entries(filters).forEach(([key, value]) => {  
          strCondition=strCondition + `${value}, `
    })
    condition = condition+strCondition.substring(0, strCondition.length - 2)+")";
    console.log(condition);

    db.Staff.deleteSome(condition, data => {
      res.json(data)
    })
  },
  deleteById: (req, res) => {
    db.Staff.deleteOne(req.params.id, data => {
      res.json(data)
    })
  }
  
}
