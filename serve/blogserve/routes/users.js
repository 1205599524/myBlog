const { json } = require('express');
var express = require('express');
var router = express.Router();
var con =require('../mysql/mysql')
/* GET users listing. */

router.post('/register', function(req, res, next) {
  new Promise((resolve,reject)=>{
    con.query(`
    insert into user (username,password,start_time,updata_time,avatar,address,nickname) values ('${req.body.username}','${req.body.password}','${Date.now()}','${Date.now()}','s','${req.headers[ 'x-forwarded-for']}','游客${req.body.username.substring(0,3)}')
    `
    ,(err,result)=>{
      if(err){
       reject(err)
      }else{
       resolve(result)
      }  
    })
  }).then(msg=>{
   
    res.json({msg:"恭喜你,账号注册成功,请登录",type:"success"})
  }).catch(msg=>{
   
    res.json({msg:"该账号已被注册",type:"warning"})
  })
}); 
router.post('/login',function(req,res){
  new Promise((resolve,reject)=>{
    con.query(`select * from user where username=${req.body.username}`,(err,result)=>{
      if(err){
        reject(err)
      }else{
        resolve(result)
      }
    })
  }).then(msg=>{
    console.log(msg[0])
    if(msg[0].password==req.body.password){
      res.json({msg:'登录成功',type:"success"})
    }else{
      res.json({msg:'密码错误',type:"warning"})
    }
      
  })
  .catch(msg=>{res.json({msg:'账号不存在',type:"warning"})})
})
module.exports = router;