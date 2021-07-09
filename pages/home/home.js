// pages/home/home.js
Page({
  data: {
    title: "哈哈"
  },
  onLoad: function (options) {

  },
  handlePushDetail() {
    wx.navigateTo({
      url: '/pages/detail/detail?title=哈哈哈哈哈哈',
    })
  }
})