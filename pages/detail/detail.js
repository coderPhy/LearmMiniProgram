// pages/detail/detail.js
Page({
  data: {

  },
  onLoad: function (options) {
    console.log(options);
  },
  onUnload: function() {
    // 当前所有栈的页面
    const pages = getCurrentPages()
    const home = pages[pages.length-2];
    // 调用页面对象的setData()修改数据
    home.setData({
      title: "呵呵"
    })
  },
  handleBackHome() {
    wx.navigateBack({
      delta: 0,
    })
  }
})