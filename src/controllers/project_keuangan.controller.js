const db = require('../models/index.js')
module.exports = {

  create: (req, res) => {
    console.log("=Tariff =create==");
    console.log(req.body);
    db.Project_keuangan.insertOne(req.body, result => {
      res.json({ id: result.insertId })
    })

  },

  getAll: (req, res) => {
    db.Project_keuangan.selectAll(data => {
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
    
    db.Project_keuangan.selectSome(condition,limit, data => {
      res.json(data)
    });

  },
  getTotal: (req, res) => {
    console.log("==getTotal==");
    db.Project_keuangan.getTotal(data => {
      res.json(data)
    })
  },

getTotalFilter: (req, res) => {
    console.log("==getTotalFilter==");
    console.log(req.params);
    let keys = Object.keys(req.params);
    let values = Object.values(req.params);

    db.Project_keuangan.getTotalFilter(keys[0],values[0],data => {
      res.json(data)
    })
  },
  

 gettopFilter: (req, res) => {
    console.log("==gettopFilter==");
    console.log(req.params);
    let keys = Object.keys(req.params);
    let values = Object.values(req.params);
    db.Project_keuangan.gettopFilter(keys[0],values[0],data => {
      res.json(data)
    })
  },


getTotalDaily: (req, res) => {
    console.log("==getTotalFilter==");
    console.log(req.params);
    let keys = Object.keys(req.params);
    let values = Object.values(req.params);
    db.Project_keuangan.getTotalDaily(data => {
      res.json(data)
    })
  },


getZonTotalThisMonth: (req, res) => {
    console.log("==getZonTotalThisMonth==");
    console.log(req.params);
    let keys = Object.keys(req.params);
    let values = Object.values(req.params);
   
    db.Project_keuangan.getZonTotalThisMonth(req.params.id_zon,data => {
      res.json(data)
    }) 
  },

getZonTotalDaily: (req, res) => {
    console.log("==getZonTotalDaily===========");
    console.log(req.params);
    let keys = Object.keys(req.params);
    let values = Object.values(req.params);
    db.Project_keuangan.getZonTotalDaily(req.params.id_zon,data => {
      res.json(data)
    }) 
  },

 getZonPremisTotalMonthly: (req, res) => {
    console.log("==getZonPremisTotalMonthly==");
    console.log(req.params);
    let keys = Object.keys(req.params);
    let values = Object.values(req.params);
    db.Project_keuangan.getZonPremisTotalMonthly(req.params.id_zon,data => {
      res.json(data)
    }) 
  },
  
  
getTotalDailyFilter: (req, res) => {
    console.log("==getTotalFilter==");
    console.log(req.params);
    let keys = Object.keys(req.params);
    let values = Object.values(req.params);
    db.Project_keuangan.getTotalDailyFilter(keys[0],values[0],data => {
      res.json(data)
    })
  },

  getTopFilter: (req, res) => {
    console.log("==getTotalFilter==");
    console.log(req.params);
    let keys = Object.keys(req.params);
    let values = Object.values(req.params);
    db.Project_keuangan.getTopFilter(keys[0],values[0],data => {
      res.json(data)
    })
  },


  
  
  createNew: (req, res) => {
    db.Project_keuangan.insertOne(req.body.vals, result => {
      res.json({ id: result.insertId })
    })
  },
  login: (req, res) => {
    console.log("req.body",req.body);
    db.Project_keuangan.login(req.body, data => {
      res.json(data)
    });
  },
  getById: (req, res) => {
    console.log("==getById==");
    db.Project_keuangan.selectOne(req.params.id, data => {
      res.json(data)
    })
  },
  updateById: (req, res) => {
    db.Project_keuangan.updateOne(req.body, req.params.id, result => {
    
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

    db.Project_keuangan.deleteSome(condition, data => {
      res.json(data)
    })
  },
  deleteById: (req, res) => {
    db.Project_keuangan.deleteOne(req.params.id, data => {
      res.json(data)
    })
  }
  
}
