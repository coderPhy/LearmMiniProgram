// pages/scroll/scroll.js
Page({
  data: {

  },
  bindscroll(event) {
    console.log(event.detail.scrollTop);
  },
  bindscrolltoupper() {
    console.log("bindscrolltoupper");
  },
  bindscrolltolower() {
    console.log("bindscrolltolower");
  }
})