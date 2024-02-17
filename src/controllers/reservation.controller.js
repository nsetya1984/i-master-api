const db = require('../models/index.js')
module.exports = {

  create: (req, res) => {
    console.log("=Reservation =create==");
    console.log(req.body);

    //Insert into Customer table
     db.Customer.insertOne(req.body.dataPost.customer, result => {
      req.body.dataPost.booking.customer_id = result.insertId
   
      db.Reservation.insertOne(req.body.dataPost.booking, result => {
      res.json({ id: result.insertId })
      })

    })

  },

  getAll: (req, res) => {
    db.Reservation.selectAll(data => {
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
    db.Reservation.selectSome(condition,limit, data => {
      res.json(data)
    });

  },
  getTotal: (req, res) => {
    console.log("==getTotal==");
    db.Reservation.getTotal(data => {
      res.json(data)
    })
  },
  
  createNew: (req, res) => {
    db.Reservation.insertOne(req.body.vals, result => {
      res.json({ id: result.insertId })
    })
  },
  getById: (req, res) => {
    console.log("==getById==");
    db.Reservation.selectOne(req.params.id, data => {
      res.json(data)
    })
  },
  updateById: (req, res) => {
    db.Reservation.updateOne(req.body, req.body.id, result => {
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

    db.Reservation.deleteSome(condition, data => {
      res.json(data)
    })
  },
  deleteById: (req, res) => {
    db.Reservation.deleteOne(req.params.id, data => {
      res.json(data)
    })
  }
}
