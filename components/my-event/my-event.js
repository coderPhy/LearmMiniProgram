// components/my-event/my-event.js
Component({
  properties: {

  },
  data: {

  },
  methods: {
    handleIncrement() {
      this.triggerEvent("increment",{name: 'hy',age: 18})
    }
  }
})
