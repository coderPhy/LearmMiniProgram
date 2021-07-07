// pages/wxml/wxml.js
Page({
  data: {
    firstName: 'peng',
    lastName: "huayao",
    age: 18,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: false,
    score: 45,
    movies: ["海贼王","海王","海尔兄弟"],
    nums: [
      [11,12],[11,14,15,16],[12],[12,14,11,14,10]
    ]
  },
  // 分数增加
  scoreAddClick() {
    this.setData({
      score: this.data.score+=5
    })
  },
  // 是否显示
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  btnClick: function(){
    this.setData({
      isActive: !this.data.isActive
    })
  },
  onLoad: function (options) {
    setInterval(()=>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})