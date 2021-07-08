// components/my-props/my-props.js
Component({
  properties: {
    // title: String
    // value相当于vue中的default
    title: {
      type: String,
      value: "默认标题",
      observer: function(newVal,oldVal) {
        // console.log(newVal,oldVal);
      }
    }
  },
  externalClasses: ['titleclass']
})
