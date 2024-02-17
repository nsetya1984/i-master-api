const db = require('../models/index.js')

module.exports = {

  create: (req, res) => {
    console.log("=Outlet =create==");
    console.log(req.body);
    db.Periode.insert(req.body, result => {
      res.json({ id: result.insertId })
    })

  },

  getAll: (req, res) => {
    db.Periode.selectAll(data => {
      res.json(data)
    })
  },
   getSome: (req, res) => {
    console.log("getSome");
    console.log(req.query);
    console.log(typeof req.query.sort );

    var condition   =" ";
    var strCondition=" AND ";
    var sort       ="";
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
    db.Periode.selectSome(condition,limit,sort, data => {
      res.json(data)
    });

  },
  getTotal: (req, res) => {
    console.log("==getTotal==");
    db.Periode.getTotal(data => {
      res.json(data)
    })
  },

  
  createNew: (req, res) => {
    db.Periode.insertOne(req.body.vals, result => {
      res.json({ id: result.insertId })
    })
  },
  getById: (req, res) => {
    console.log("==getById==");
    db.Periode.selectOne(req.params.id, data => {
      res.json(data)
    })
  },
  updateById: (req, res) => {
    db.Periode.updateOne(req.body, req.body.id, result => {
      if (result.changedRows === 0) {
        res.json(result.message);
      } else {
       res.json(req.body);
      }
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

    db.Periode.deleteSome(condition, data => {
      res.json(data)
    })
  },
  
  deleteById: (req, res) => {
    db.Periode.deleteOne(req.params.id, data => {
      res.json(data)
    })
  }
}
