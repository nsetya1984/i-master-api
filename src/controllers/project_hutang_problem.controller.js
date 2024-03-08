const db = require('../models/index.js')
module.exports = {

  create: (req, res) => {
    console.log("=Tariff =create==");
    console.log(req.body);
    db.Project_hutang_problem.insertOne(req.body, result => {
      res.json({ id: result.insertId })
    })

  },

  getAll: (req, res) => {
    db.Project_hutang_problem.selectAll(data => {
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
    

    console.log(typeof req.query.range);

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
    
    db.Project_hutang_problem.selectSome(condition,limit, data => {
      res.json(data)
    });

  },

  getSomeJoin: (req, res) => {
    console.log("getSomeJoin");
    console.log(req.query);
    
    var filters=JSON.parse(req.query.filter);
    var condition=" ";
    var strCondition=" AND ";
    var limit=" LIMIT 1000";
 
  

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
    
    db.Project_hutang_problem.selectJoin(condition,limit, data => {
      res.json(data)
    });

  },
  getTotal: (req, res) => {
    console.log("==getTotal==");
    db.Project_hutang_problem.getTotal(data => {
      res.json(data)
    })
  },

getTotalFilter: (req, res) => {
    console.log("==getTotalFilter==");
    console.log(req.params);
    let keys = Object.keys(req.params);
    let values = Object.values(req.params);

    db.Project_hutang_problem.getTotalFilter(keys[0],values[0],data => {
      res.json(data)
    })
  },
  
 getTotalByCategori: (req, res) => {
    console.log("==getTotalByCategori==");
    db.Project_hutang_problem.getTotalByCategori(data => {
      res.json(data)
    })
  },
  getTotalByCategoriFilter: (req, res) => {
    console.log("==getTotalByCategoriFilter==");
    console.log("==getTotalFilter==");
    console.log(req.params);
    let keys = Object.keys(req.params);
    let values = Object.values(req.params);
    db.Project_hutang_problem.getTotalByCategoriFilter(keys[0],values[0],data => {
      res.json(data)
    })
  },



  createNew: (req, res) => {
    db.Project_hutang_problem.insertOne(req.body.vals, result => {
      res.json({ id: result.insertId })
    })
  },
  login: (req, res) => {
    console.log("req.body",req.body);
    db.Project_hutang_problem.login(req.body, data => {
      res.json(data)
    });
  },
  getById: (req, res) => {
    console.log("==getById==");
    db.Project_hutang_problem.selectOne(req.params.id, data => {
      res.json(data)
    })
  },
  updateById: (req, res) => {
    db.Project_hutang_problem.updateOne(req.body, req.params.id, result => {
    
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

    db.Project_hutang_problem.deleteSome(condition, data => {
      res.json(data)
    })
  },
  deleteById: (req, res) => {
    db.Project_hutang_problem.deleteOne(req.params.id, data => {
      res.json(data)
    })
  }
  
}
