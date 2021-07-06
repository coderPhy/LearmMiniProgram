// pages/image-v/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl: null
  },

  handleChooseAlbum() {
    wx.chooseImage({
      success: (res) => {
        console.log(res);
        this.setData({
          imageUrl: res.tempFiles[0].path
        })
      }
    })
  },
  handleImageLoad() {
    console.log("图片加载完成");
  }
})