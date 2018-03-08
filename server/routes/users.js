var express = require('express');
var router = express.Router();
var User = require('../models/user');
// require('./../util/util')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// 登录接口
router.post('/login', function(req, res, next) {
  // 接收的参数
  let param = {
    userName: req.body.userName,
    userPwd: req.body.userPwd
  }
  User.findOne(param, function(err, doc) {
    if(err) {
      res.json({
        status: 1,
        msg: '用户名或密码错误'
      })
    } else {
      if(doc) {
        console.log(doc);
        res.cookie('userId', doc.userId, {
          path: '/',
          maxAge: 1000 * 60 * 60
        })

        res.cookie('userName', doc.userName, {
          path: '/',
          maxAge: 1000 * 60 * 60
        });
        res.json({
          status: 0,
          msg: '登录成功',
          result: {
            userName: doc.userName
          }
        })
      }else {
        res.json({
          status: '1',
          msg: '',
          result:'用户名或密码错误'
        })
      }
    }
  })
})

// 判断当前用户是否登录
router.get('/checkLogin', function(req, res, next) {
  if(req.cookies.userId) {
    res.json({
      status: 0,
      msg: '',
      result: req.cookies.userName,
      'adf': !req.cookies.userId
    })
  } else {
    res.json({
      status: 1,
      msg: '未登录',
      result: req
    })
  }
})

// 用户注销
router.post('/logout', function(req, res, next) {
  res.cookie("userId", "", {
    path: '/',
    MaxAge: -1
  });
  res.json({
    status: 0,
    msg: '',
    result: '退出成功'
  })
})

// 查询购物车列表
router.get('/cartList', function(req, res, next) {
  let userId = req.cookies.userId
  User.findOne({'userId': userId}, function(err, doc) {
    if(err) {
      res.json({
        status: 1,
        msg: err.message,
        result: ''
      })
    } else {
      if(doc) {
        res.json({
          status: 0,
          msg: '',
          result: doc.cartList
        })
      }
    }
  })
})

// 购物车数量操作
router.post('/cartEdit', function(req, res, next) {
  let userId = req.cookies.userId
  productId = req.body.productId
  productNum = req.body.productNum
  checked = req.body.checked

  User.update({'userId': userId, 'cartList.productId': productId}, {
    'cartList.$.productNum': productNum,
    'cartList.$.checked' : checked
  },function(err, doc) {
    if (err) {
      res.json({
        status: 1,
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: 0,
        msg: '',
        result: '商品更新成功'
      })
    }
  })
})

// 删除商品
router.post('/cartDel', function(req, res, next) {
  let userId = req.cookies.userId,
  productId = req.body.productId
  User.update({
    userId: userId
  }, {
    $pull: {
      'cartList': {
        'productId': productId
      }
    }
  }, function(err, doc) {
    if (err) {
      res.json({
        status: 1,
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: 0,
        msg: '',
        result: '商品删除成功'
      })
    }
  })
})

// 全选接口
router.post('/editCheckAll', function(req, res, next) {
  let userId = req.cookies.userId,
      checkAll = req.body.checkAll ? '1' : '0'
  
  User.findOne({'userId': userId}, function(err, user) {
    if (err) {
      res.json({
        status: 1,
        msg: err.message,
        result: ''
      })
    } else {
      user.cartList.forEach((item) => {
        item.checked = checkAll
      })
      user.save(function(err1, doc) {
        if (err1) {
          res.json({
            status: 1,
            msg: err1.message,
            result: ''
          })
        } else {
          res.json({
            status: 0,
            msg: '',
            result: '操作成功'
          })
        }
      })
    }
  })
})

// 获取用户地址
router.get('/addressList', function(req, res, next) {
  let userId = req.cookies.userId
  User.findOne({'userId': userId}, function(err, doc) {
    if (err) {
      res.json({
        status: 0,
        msg: '',
        result: err
      })
    } else {
      res.json({
        status: 0,
        msg: '获取用户地址成功',
        result: doc.addressList
      })
    }
  })
})

// 更改默认地址
router.post('/setDefault', function(req, res, next) {
  let userId = req.cookies.userId,
      addressId = req.body.addressId
  if(!addressId) {
    res.json({
      status: 1003,
      msg: 'addressId is null',
      result: ''
    })
  } else {
    User.findOne({'userId': userId}, function(err, doc) {
      if(err) {
        res.json({
          status: 1,
          msg: err.message,
          result: ''
        })
      } else {
        let addressList = doc.addressList
        addressList.forEach((item) => {
          if(item.addressId === addressId) {
            item.isDefault = true
          } else {
            item.isDefault = false
          }
        })
        doc.save(function(err1, doc1) {
          if(err1) {
            res.json({
              status: 1,
              msg: err1.message,
              result: '' 
            })
          } else {
            res.json({
              status: 0,
              msg: '',
              result: doc1.addressList
            })
          }
        })
      }
    })
  }
})

// 删除地址
// router.post('/delAddress', function(req, res, next) {
//   let userId = req.cookies.userId,
//       addressId = req.body.addressId;
//       console.log(userId,addressId)
//   if (!addressId) {
//     res.json({
//       status: 1003,
//       msg: 'addressId is null',
//       result: ''
//     })
//   } else {
//     User.update({ 'userId': userId },{
//       $pull: {
//         addressList: {
//           'addressId': addressId
//         }
//       }
//     },function(err, doc) {
//       console.log(doc);
//       console.log(1);
//       if(err) {
//         res.json({
//           status:'1',
//           msg:err.message,
//           result:''
//         })
//       }else {
//         res.json({
//           status: 0,
//           msg: '',
//           result: doc
//         })
//       }  
//     })
//   }
// })

// 删除地址
router.post('/delAddress', (req, res, next) => {
  let userId = req.cookies.userId, addressId = req.body.addressId;
  if (!addressId) {
    res.json({
      status: '10003',
      msg: 'addressId 未获得',
      result: ''
    })
  } else {
    User.update({ userId: userId }, {
      $pull: {
        addressList: {
          'addressId': addressId
        }
      }
    }, (err, doc) => {
      if (err) {
        res.json({
          status: '1',
          msg: err.message,
          result: ''
        })
      } else {
        if (doc) {
          res.json({
            status: '0',
            msg: '',
            result: doc
          })
        }
      }
    })
  }
})

// 添加地址
router.post('/addadd', function(request, result, next) {
  if (!request.cookies.userId) {
    result.json({
      status: 1003,
      msg: 'userId is null',
      result: ''
    })
  } else {
  let addressId = request.body.addressId,
      userName = request.body.userName,
      streetName = request.body.streetName,
      postCode = request.body.postCode,
      tel = request.body.userTel,
      isDefault = false

    User.findOne({}, function(err, doc) {
      if(err) {
        result.json({
          status: 1,
          mes: err.message,
          result: ''
        })
      } else if(doc) {
        let params = {
          "addressId": addressId,
          "userName": userName,
          "streetName": streetName,
          "postCode": postCode,
          "tel": tel,
          "isDefault": isDefault
        }
        doc.addressList.push(params)
        doc.save((err1, doc2) => {
          if (err1) {
            result.json({
              status: 1,
              mes: err1.message,
              result: ''
            })
          } else {
            result.json({
              status: 0,
              mes: '',
              result: '地址保存成功'
            })
          }
        })
      }
    })
  }
})


router.get('*', function(req, res, next) {
  res.send('台湾是中国不可分割的一部分')
})
module.exports = router;
