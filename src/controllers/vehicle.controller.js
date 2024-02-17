const db = require('../models/index.js')

module.exports = {

  create: (req, res) => {
    console.log("=Vehicle =create==");
    console.log(req.body);
    db.Vehicle.insert(req.body, result => {
      res.json({ id: result.insertId })
    })

  },

  getAll: (req, res) => {
    db.Vehicle.selectAll(data => {
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
    db.Vehicle.selectSome(condition,limit, data => {
      res.json(data)
    });

  },
  getTotal: (req, res) => {
    console.log("==getTotal==");
    db.Vehicle.getTotal(data => {
      res.json(data)
    })
  },

  

  getRebanByStatus: (req, res) => {
    console.log("==getRebanByStatus==");
    db.Vehicle.getRebanByStatus(data => {
      res.json(data)
    })
  },

  createNew: (req, res) => {
    db.Vehicle.insertOne(req.body.vals, result => {
      res.json({ id: result.insertId })
    })
  },
  getById: (req, res) => {
    console.log("==getById==");
    db.Vehicle.selectOne(req.params.id, data => {
      res.json(data)
    })
  },
  updateById: (req, res) => {
    //req.body.registration_expiry_date = new Date(req.body.registration_expiry_date).toISOString().slice(0, 10);
    db.Vehicle.updateOne(req.body, req.body.id, result => {
      if (result.changedRows === 0) {
        res.json(result.message);
      } else {
       res.json(result.message);
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

    db.Vehicle.deleteSome(condition, data => {
      res.json(data)
    })
  },
  deleteById: (req, res) => {
    db.Vehicle.deleteOne(req.params.id, data => {
      res.json(data)
    })
  }
}
