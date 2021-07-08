// components/my-mslot/my-mslot.js
Component({

  /**
   * 外界给组件传值
   */ 
  properties: {
    titles:{
      type: Array,
      value: [],
      observer: function(newVal,oldVal) {

      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 组件的方法列表
   */
  methods: {

  },
  /**
   * 定义组件的配置选项
   * multipleSlots: 在使用多插槽时需要设置true
   * styleIsolation: 设置样式的隔离方式
   */
  options: {
    multipleSlots: true,
    styleIsolation: "shared"
  },
  /**
   * 外界给组件传入的额外样式
   */
  externalClasses: [],
  /**
   * 监听data和properties的改变
   */
  observers: {
    titles: function(newVal) {
      console.log(newVal);
    }
  },

  /**
   * 组件中监听什么周期函数
   */
  //1.监听所在页面生命周期
  pageLifetimes: {
    show() {
      console.log("监听组件所在页面显示出来的回调函数");
    },
    hide() {
      console.log("监听组件所在页面隐藏起来的回调函数");
    },
    resize() {
      console.log("监听组件所在页面改变大小的回调函数");
    }
  },
  /**
   * 监听组件本身的生命周期函数
   */
  lifetimes: {
    created() {
      console.log("组件被创建出来");
    },
    attached() {
      console.log("组件被添加到页面");
    },
    ready() {
      console.log("组件被渲染出来");
    },
    moved() {
      console.log("组件被移动到另外一个节点");
    },
    detached() {
      console.log("组件被移除掉");
    }
  }

})
