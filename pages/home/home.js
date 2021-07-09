// pages/home/home.js
Page({
  data: {

  },
  handleBtnClick() {
    console.log("handleBtnClick");
  },
  handleShowToast() {
    wx.showToast({
      title: '弹窗标题',
      // 弹窗时间
      duration: 3000,
      // success error loading none
      icon: "success",
      // 必须是本地图片,优先级高于icon
      image: '/image/img/miaomi.jpg',
      // 是否显示透明蒙层，防止触摸穿透(弹窗出来的时候不监听其他按钮点击)
      mask: true,
      success() {
        console.log("success");
      },
      fail() {
        console.log("fail");
      },
      // 接口调用结束的回调函数
      complete() {
        console.log("complete");
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '标题',
      content: '内容',
      // 是否显示取消按钮
      showCancel: true,
      // 取消按钮的文字
      cancelText: '取消吧',
      // 取消按钮的文字颜色
      cancelColor: '#0f0',
      // 确认按钮的文字
      confirmText: "确认吧",
      // 确认按钮的文字颜色
      confirmColor: '#858',
      success(event) {
        console.log("success",event.cancel);
      },
      fail() {
        console.log("fail");
      },
      complete() {
        console.log("complete");
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: 'loading',
      mask: true,
      success() {
        console.log("showLoading success");
      },
      fail() {
        console.log("showLoading fail");
      },
      complete() {
        console.log("showLoading complete");
        setTimeout(() => {
          wx.hideLoading({
            success: (res) => {
              console.log("hideLoading success");
            },
          })
        },2000)
      }
    })
  },
  handleShowActionSheet() {
    wx.showActionSheet({
      alertText: "警示文案",
      itemList: ["一","二","三"],
      itemColor: "#0f0",
      success() {
        console.log("showActionSheet success");
      },
      fail() {
        console.log("showActionSheet fail");
      },
      complete() {
        console.log("showActionSheet complete");
      }
    })
  },
  onShareAppMessage(options) {
    return {
      // 转发时小程序的标题，不设置默认以项目名组为小程序名
      title: "hy miniprogram",
      // 分享出去的小程序点击后进入的页面，不设置默认进入小程序首页
      path: "/pages/about/about.js",
      // 分享出去的小程序显示的图片，不设置默认以截图首页作为图片
      imageUrl: '/image/img/miaomi.jpg'
    }
  }
})