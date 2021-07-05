App({
  // 小程序关闭后会存活两个小时，两个小时内再次进来不会再执行onLaunch 直接执行onShow
  onLaunch: function (options) {
    // console.log("小程序初始化成功,onLaunch");
    // console.log(options);

    // wx.getUserInfo({
    //   success: function(res) {
    //     console.log(res);
    //   }
    // })

    // setTimeout(function() {
    //   const err = new Error();
    //   throw err;
    // },2000)
  },
  onShow: function (options) {
    // console.log("界面显示出来 onShow");
    //判断小程序的进入场景
    switch (options.scene) {
      case 1001:
        break;
      case 1005:
        break;
    }

    // wx.getUserInfo({
    //   success:function (res){
    //     console.log(res);
    //   }
    // })
  },
  onHide: function () {
    console.log("小程序被关闭 onHide");
  },
  onError: function () {
    console.log("小程序发生错误  onError");
  },
  // globalData 保存全局变量
  globalData: {
    name: 'coderwhy',
    age: 18
  }
})