// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },

  methods: {
    handleItemClick(event) {
      // console.log("handleItemClick",event.currentTarget.dataset.index);
      const index = event.currentTarget.dataset.index;
      const title = this.properties.titles[index];
      this.setData({
        currentIndex: index
      })
      this.triggerEvent('itemClick',{
        index,
        title
      })
    }
  }
})
