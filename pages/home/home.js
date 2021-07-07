// pages/home/home.js
Page({
  data: {
    titles: ['张三','李四','王五']
  },
  handleBtnClick (){
    console.log("handleBtnClick");
  },

  handleTouchStart() {
    console.log("handleTouchStart");
  },
  handleTouchMove() {
    console.log("handleTouchMove");
  },
  handleTouchEnd() {
    console.log("handleTouchEnd");
  },
  handleTap(event) {
    // console.log("handleTap");
    console.log(event);
  },
  handleLongpress() {
    console.log("handleLongpress");
  },

  handleinner(event) {
    console.log("inner",event);
  },
  handleouter(event) {
    console.log("outer",event);
  },
  
  handleItemClick(event) {
    console.log(event.currentTarget.dataset.index);
    console.log(event.currentTarget.dataset.item);
    // console.log(event.target.dataset);
  },

  // 事件冒泡和事件捕获
  handleCaptureView1() {
    console.log("handleCaptureView1");
  },
  handleBindView1() {
    console.log("handleBindView1");
  },
  handleCaptureView2() {
    console.log("handleCaptureView2");
  },
  handleBindView2() {
    console.log("handleBindView2");
  },
  handleCaptureView3() {
    console.log("handleCaptureView3");
  },
  handleBindView3() {
    console.log("handleBindView3");
  }

})