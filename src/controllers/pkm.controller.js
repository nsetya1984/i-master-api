const db = require('../models/index.js')
module.exports = {

  create: (req, res) => {
    console.log("=Tariff =create==");
    console.log(req.body);
    db.Pkm.insertOne(req.body, result => {
      res.json({ id: result.insertId })
    })

  },

  getAll: (req, res) => {
    db.Pkm.selectAll(data => {
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
    
    db.Pkm.selectSome(condition,limit, data => {
      res.json(data)
    });

  },
  getTotal: (req, res) => {
    console.log("==getTotal==");
    console.log(req.params);
    db.Pkm.getTotal(data => {
      res.json(data)
    })
  },

  getTotalFilter: (req, res) => {
    console.log("==getTotalFilter==");
    console.log(req.params);
    let keys = Object.keys(req.params);
    let values = Object.values(req.params);

    db.Pkm.getTotalFilter(keys[0],values[0],data => {
      res.json(data)
    })
  },

 getTotalByCategori: (req, res) => {
    console.log("==getTotalByCategori==");
    db.Pkm.getTotalByCategori(data => {
      res.json(data)
    })
  },

  createNew: (req, res) => {
    db.Pkm.insertOne(req.body.vals, result => {
      res.json({ id: result.insertId })
    })
  },
  login: (req, res) => {
    console.log("req.body",req.body);
    db.Pkm.login(req.body, data => {
      res.json(data)
    });
  },

  

  getPremisByZonId: (req, res) => {
    console.log("==getPremisByZonId==");
    console.log(req.params);
    var limit=" LIMIT 100";
    var condition=" AND a.id_zon= "+ req.params.id_zon+ "";
    db.Pkm.selectSome(condition,limit, data => {
      res.json(data)
    });

  },

  getById: (req, res) => {
    console.log("==getById==");
    db.Pkm.selectOne(req.params.id, data => {
      res.json(data)
    })
  },
  updateById: (req, res) => {
    db.Pkm.updateOne(req.body, req.params.id, result => {
    
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

    db.Pkm.deleteSome(condition, data => {
      res.json(data)
    })
  },
  deleteById: (req, res) => {
    db.Pkm.deleteOne(req.params.id, data => {
      res.json(data)
    })
  }
  
}
