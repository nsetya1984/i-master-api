const db = require('../models/index.js')
module.exports = {

  create: (req, res) => {
    console.log("=Tariff =create==");
    console.log(req.body);
    db.Tariff.insertOne(req.body, result => {
      res.json({ id: result.insertId })
    })

  },

  getAll: (req, res) => {
    db.Tariff.selectAll(data => {
      res.json(data)
    })
  },
  getSome: (req, res) => {
    console.log("getSome");
    console.log(req.query);
    
    var condition=" ";
    var strCondition=" AND ";
    var limit=" LIMIT 100";
 
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
  
    console.log(condition);
    db.Tariff.selectSome(condition,limit, data => {
      res.json(data)
    });

  },
  getTotal: (req, res) => {
    console.log("==getTotal==");
    db.Tariff.getTotal(data => {
      res.json(data)
    })
  },

  


  createNew: (req, res) => {
    db.Tariff.insertOne(req.body.vals, result => {
      res.json({ id: result.insertId })
    })
  },
  getById: (req, res) => {
    console.log("==getById==");
    db.Tariff.selectOne(req.params.id, data => {
      res.json(data)
    })
  },
  updateById: (req, res) => {
    db.Tariff.updateOne(req.body, req.params.id, result => {
    
    })
  },
  deleteById: (req, res) => {
    db.Tariff.deleteOne(req.params.id, data => {
      res.json(data)
    })
  }
}
