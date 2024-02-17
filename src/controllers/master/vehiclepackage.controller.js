const db = require('../../models/index.js')
module.exports = {
  create: (req, res) => {
    console.log("==create==");
    console.log(req.body);
    db.VehiclePackage.insertOne(req.body, result => {
      res.json({ id: result.insertId })
    })

  },

  getAll: (req, res) => {
    db.VehiclePackage.selectAll(data => {
      res.json(data)
    })
  },
  getSome: (req, res) => {
    console.log("Vehicle Package getSome");
    console.log(req.query);
   
    var condition=" ";
    var strCondition=" AND ";
    var limit=" LIMIT 100";


    if (typeof req.query.filter == "object" || typeof req.query.filter == "string") {
     
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
    db.VehiclePackage.selectSome(condition,limit, data => {
      res.json(data)
    });

  },
  createNew: (req, res) => {
    db.VehiclePackage.insertOne(req.body, result => {
      res.json({ id: result.insertId })
    })
  },
  getById: (req, res) => {
    console.log("==getById==");
    db.VehiclePackage.selectOne(req.params.id, data => {
      res.json(data)
    })
  },
  updateById: (req, res) => {
    db.VehiclePackage.updateOne(req.body, req.body.id, result => {
      if (result.changedRows === 0) {
        res.status(204).end()
      } else {
        res.status(200).end()
      }
    })
  },
  deleteById: (req, res) => {
    db.VehiclePackage.deleteOne(req.params.id, data => {
      res.json(data)
    })
  }
}
