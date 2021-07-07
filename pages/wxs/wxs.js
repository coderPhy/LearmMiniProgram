// pages/wxs/wxs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price: 20.3422,
    priceStr: '23.9478'
  },
  numberToFixed(value) {
    return value.toFixed(2)
  }
})