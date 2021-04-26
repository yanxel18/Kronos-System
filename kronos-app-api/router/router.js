const express = require('express');
const router = express.Router();
const api_data = require('../api/data_api');
 

  router.get('/view/users/',function (req,res, next){
    return  api_data.GetData(req, res, next)
  })
  router.get('/status/statuslist/',function (req, res, next){
    return  api_data.GetStatusMenu(req, res, next)
  })
  router.put('/status/in',function (req, res, next){ 
    if (req.body.idcode === "") {
      return;
    }
    console.log(req.body.idcode + " user in")
    return api_data.UpdateStatusIn(req, res, next)
  })
  router.put('/status/out',function (req, res, next){ 
    if (req.body.idcode === "") {
      return;
    }
    console.log(req.body.idcode + "  user out" )
    return api_data.UpdateStatusOut(req, res, next)
  })

  router.put('/status/leave',function (req, res, next){ 
    if (req.body.idcode === "") {
      return;
    }
    console.log(req.body.idcode + "  user leave" )
    return api_data.UpdateStatusLeave(req, res, next)
  })

  router.put('/status/otherstatus',function (req, res, next){ 
 
    
    return api_data.UpdateOtherStatus(req, res, next)
  })
  module.exports = router