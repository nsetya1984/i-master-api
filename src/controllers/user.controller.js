const db = require('../models/index.js')
module.exports = {

  create: (req, res) => {
    console.log("=Tariff =create==");
    console.log(req.body);
    db.User.insertOne(req.body, result => {
      res.json({ id: result.insertId })
    })

  },

  getAll: (req, res) => {
    db.User.selectAll(data => {
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
      if(key==='id')
        strCondition=strCondition+` ${key} = '${value}' AND `
      else
        strCondition=strCondition+` ${key} LIKE '%${value}%' AND `
    })
    condition = strCondition.substring(0, strCondition.length - 4);
    

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
    console.log(limit);
    
    db.User.selectSome(condition,limit, data => {
      res.json(data)
    });

  },
  getTotal: (req, res) => {
    console.log("==getTotal==");
    db.User.getTotal(data => {
      res.json(data)
    })
  },


  createNew: (req, res) => {
    db.User.insertOne(req.body.vals, result => {
      res.json({ id: result.insertId })
    })
  },
  login: (req, res) => {
    console.log("req.body",req.body);
    db.User.login(req.body, data => {
      res.json(data)
    });
  },
  getById: (req, res) => {
    console.log("==getById==");
    db.User.selectOne(req.params.id, data => {
      res.json(data)
    })
  },
  updateById: (req, res) => {
    db.User.updateOne(req.body, req.params.id, result => {
    
    })
  },
  deleteSome: (req, res) => {
    console.log("getSome");
    console.log(req.query);
    var filters=JSON.parse(req.query.filter);
   
    
    var condition=" WHERE id IN (";
    var strCondition="";
    Object.entries(filters).forEach(([key, value]) => {  
          strCondition=strCondition + `${value}, `
    })
    condition = condition+strCondition.substring(0, strCondition.length - 2)+")";
    console.log(condition);

    db.User.deleteSome(condition, data => {
      res.json(data)
    })
  },
  deleteById: (req, res) => {
    db.User.deleteOne(req.params.id, data => {
      res.json(data)
    })
  }
  
}
