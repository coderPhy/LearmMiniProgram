// pages/input/input.js
Page({
  data: {

  },
  bindinput(event) {
    console.log("bindinput",event.detail.value);
  },
  bindfocus() {
    console.log("bindfocus");
  },
  bindblur() {
    console.log("bindblur");
  },
  bindconfirm() {
    console.log("bindconfirm");
  },
  bindkeyboardheightchange() {
    console.log("bindkeyboardheightchange");
  }
})