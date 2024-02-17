const db = require('../models/index.js')

module.exports = {

  create: (req, res) => {
    console.log("=Outlet =create==");
    console.log(req.body);
    db.Keuangan.insert(req.body, result => {
      res.json({ id: result.insertId })
    })

  },
  postBelanjaPendapatan: (req, res) => {
    console.log("=Keuangan--->postBelanjaPendapatan==");
    console.log(req.body);

    var post=req.body;
   
   //masukan dahulu ketable keuangan tetapi hitung dulu total belanja

    var total=0;
    Object.entries(req.body.belanja).forEach(([key,jumlah]) => { 
      console.log(jumlah);

       total=total+jumlah;
    })

    var objKeuanganToInsert={
      tanggal: post.tanggal,
      beras: post.beras,
      pendapatan: post.pendapatan,
      pesanan: post.pesanan,
      grabfood: post.grabfood,
      gofood: post.gofood,
      shopeefood: post.shopeefood,
      outlet_id:post.outlet_id,
      periode_id:post.periode_id,
      belanja:total
    }

    console.log(objKeuanganToInsert);
  
    db.Keuangan.insert(objKeuanganToInsert, result => {
         Object.entries(req.body.belanja).forEach(([key,jumlah]) => {
            itemId = key.replace ( /[^\d.]/g, '' );
     
            var objPerbelanjaanToInsert={
              item_belanja_id:itemId,
              jumlah:jumlah,
              tanggal:post.tanggal,
              keuangan_id:result.insertId
            };
            if(objPerbelanjaanToInsert.item_belanja_id > 0)
            {
              db.Perbelanjaan.insert(objPerbelanjaanToInsert, result2 => {
                result2.insertId 
              })
            }
         })

    res.json({ id: result.insertId })
  })


  },

  getAll: (req, res) => {
    db.Keuangan.selectAll(data => {
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

    console.log("Keuangan ==>filter");
    console.log(typeof req.query.filter );



    if (typeof req.query.filter == "string") {
       var filters=JSON.parse(req.query.filter);
       
       Object.entries(filters).forEach(([key, value]) => {  
        if(key==='id' || key==="outlet_id")
          strCondition=strCondition+` ${key} = '${value}' AND `
        else
          strCondition=strCondition+` ${key} LIKE '%${value}%' AND `
      })
      condition = strCondition.substring(0, strCondition.length - 4);
    }


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
      /*
      sortObject.forEach((key) => {  
          strObject = strObject+" k."+key +""
      })
      */
      strObject = strObject+" k.id";
      sort = strObject
   
    }

    console.log(condition);
    db.Keuangan.selectSome(condition,limit,sort, data => {
      res.json(data)
    });

  },
  getkeuanganOutlet: (req, res) => {
  },
  getSomeByOutletId: (req, res) => {
    console.log("KEUANGAN ==>getSomeByOutletId");
    console.log("getSomeByOutletId");
    console.log(req.params);
    console.log(req.query);
    console.log(typeof req.query.sort );

    var condition   =" AND outlet_id="+req.params.outlet_id;
    var strCondition=" AND ";
    var sort       =" ORDER BY tanggal ASC";
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
    db.Keuangan.selectSome(condition,limit,sort, data => {
      res.json(data)
    });


  },
getSomeByOutletIdPeriodeId: (req, res) => {
    console.log("KEUANGAN ==>getSomeByOutletIdPeriodeId");
    console.log(req.params);
    console.log(req.query);
    console.log(typeof req.query.sort);

    var condition   =" AND outlet_id="+req.params.outlet_id + " AND periode_id="+req.params.periode_id;
    var strCondition=" AND ";
    var sort       =" ORDER BY tanggal ASC";
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
    db.Keuangan.selectSome(condition,limit,sort, data => {
      res.json(data)
    });


  },

  getTotal: (req, res) => {
    console.log("==getTotal==");
    db.Keuangan.getTotal(req.params.periode_id,data => {
      res.json(data)
    })
  },
  getTotalByOutletByPeriode: (req, res) => {
    console.log("==getTotal==");
    db.Keuangan.getTotalByOutletByPeriode(req.params.periode_id,req.params.outlet_id,data => {
      res.json(data)
    })
  },


  getTopTenByPeriode: (req, res) => {
    console.log("==getTopTenByPeriode==");
    db.Keuangan.getTopTenByPeriode(req.params.periode_id,data => {
      res.json(data)
    })
  },
  getDailyTotalOmsetByPeriode: (req, res) => {
    console.log("==getDailyTotalOmsetByPeriode==");
    db.Keuangan.getDailyTotalOmsetByPeriode(req.params.periode_id,data => {
      res.json(data)
    })
  },
  
  getDailyTotalOmsetByPeriodeByOutlet: (req, res) => {
    console.log("==getDailyTotalOmsetByPeriodeByOutlet==");
    db.Keuangan.getDailyTotalOmsetByPeriodeByOutlet(req.params.periode_id,req.params.outlet_id,data => {
      res.json(data)
    })
  },

  

  createNew: (req, res) => {
    db.Keuangan.insertOne(req.body.vals, result => {
      res.json({ id: result.insertId })
    })
  },
  getById: (req, res) => {
    console.log("==getById==");
    db.Keuangan.selectOne(req.params.id, data => {
      res.json(data)
    })
  },
  getKeuanganAndItemById: (req, res) => {
    console.log("==getKeuanganAndItemById==");
    db.Keuangan.selectOneAndItem(req.params.id, data => {
      db.Perbelanjaan.selectByKeuanganId(req.params.id, dataBelanja => {
          data.itemBelanja=dataBelanja;
          res.json(data)
      })
    })
  },
  updateById: (req, res) => {
    //req.body.registration_expiry_date = new Date(req.body.registration_expiry_date).toISOString().slice(0, 10);
    db.Keuangan.updateOne(req.body, req.body.id, result => {
      if (result.changedRows === 0) {
        res.json(result.message);
      } else {
       res.json(result.message);
      }
    })
  },
   updateByIdAndItem: (req, res) => {
    console.log("req.body",req.body);
    var itemBelanja=req.body.itemBelanja;

    db.Keuangan.updateByIdAndItem(req.body, req.body.id, result => {
       console.log("itemBelanja",itemBelanja);
       Object.entries(itemBelanja).forEach(([key,jumlah]) => { 
            var objPerbelanjaanToUpdate={
              jumlah:jumlah,
            };
            db.Perbelanjaan.updateByIdKeuanganId(objPerbelanjaanToUpdate,req.body.id,key,result2 => {
             // console.log(result2); 
            })
            
        })
      res.json(req.body);

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

    db.Keuangan.deleteSome(condition, data => {
      res.json(data)
    })
  },
  
  deleteById: (req, res) => {
    db.Keuangan.deleteOne(req.params.id, data => {
      res.json(data)
    })
  }
}
