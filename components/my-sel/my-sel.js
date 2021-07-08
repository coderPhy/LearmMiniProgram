// components/my-sel/my-sel.js
Component({
  properties: {

  },
  data: {
    counter: 0
  },
  methods: {
    // 对外暴露接口 
    incrementCounter(num) {
      this.setData({
        counter: this.data.counter + num
      })
    }
  }
})
