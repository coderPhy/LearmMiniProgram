// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0,
    isShow: true
  },
  addCounter(event) {
    console.log(event.detail);
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleItemClick(event) {
    console.log("home handleItemClick",event.detail.index,event.detail.title);
  },
  handleIncrementCpn() {
    // 通过id获取自定义组件对象
    const sel = this.selectComponent("#sel-id")
    // 通过class获取自定义组件对象
    // const sel = this.selectComponent(".sel-class");
    // 不建议直接修改自定义组件的变量
    // sel.setData({
      // counter: sel.data.counter + 1
    // })

    // 使用对外暴露的接口
    sel.incrementCounter(10);
  },
  hendleClick() {
    this.setData({
      isShow: !this.data.isShow
    })
  }
}) 