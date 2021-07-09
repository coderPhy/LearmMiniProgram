import request from "../../service/network"
Page({
  data: {

  },
  onLoad: function (options) {
    // 使用原生的方式发送网络请求
    this.get_data_origin();

    // 使用封装的方式发送网络请求
    request({
      url: "http://152.136.185.210:7878/api/m5/recommend"
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(res);
    })
  },
  get_data_origin() {
        // get请求
    // wx.request({
    //   url: "http://152.136.185.210:7878/api/m5/recommend",
    //   success:(res) => {
    //     console.log(res);
    //   }
    // })

    // get请求
    // wx.request({
    //   url: 'http://152.136.185.210:7878/api/m5/home/data?type=sell&page=1',
    //   success(res){
    //     console.log(res);
    //   }
    // })

    // 携带参数的get请求
    // wx.request({
    //   url: 'http://152.136.185.210:7878/api/m5/home/data',
    //   data: {
    //     type: 'sell',
    //     page: 1 
    //   },
    //   success(res){
    //     console.log(res);
    //   }
    // })

    // post请求携带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: "post",
    //   data: {
    //     name: 'hy',
    //     age: 18
    //   },
    //   success(res){
    //     console.log(res);
    //   },
    //   // 请求失败的回调
    //   fail(err) {
    //     console.log(err);
    //   },
    //   // 接口调用结束后的回调函数 成功失败都会执行
    //   complete() {

    //   }
    // })
  }
})