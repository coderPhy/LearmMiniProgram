// pages/home/home.js
//getApp()获取App()产生的实例对象
const app = getApp();
// console.log(app.globalData.name);
// console.log(app.globalData.age);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "哈哈",
    list:[]
  },
  // 监听按钮的点击
  handleGetUserInfo(event) {
    console.log(event.detail.userInfo);
  },
  hahaClick() {
    console.log("哈哈被点击");
  },

  // 监听页面的生命周期函数
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
    wx.request({
      url: 'http://152.136.185.210:7878/api/m5/recommend',
      success:(res)=>{
        console.log(res);
        this.setData({
          list: res.data.data.list
        })

      }
    })
  },
    /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage");
  },
  // 页面滚动的处理函数
  onPageScroll(obj) {
    console.log(obj);
  },
  // 页面上拉触底事件的处理函数
  onReachBottom() {
    console.log("上拉到底部");
  },
  // 监听页面下拉的处理函数
  onPullDownRefresh() {
    console.log("下拉");
  }
})