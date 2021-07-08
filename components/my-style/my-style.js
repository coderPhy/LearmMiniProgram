// components/my-style/my-style.js
Component({
  options: {
    // styleIsolation: 'isolated'默认isolated 自定义组件跟外部组件互不影响
    // styleIsolation: "apply-shared"外部组件的样式可以影响到自定义组件 而自定义组件不能影响外部组件
    // styleIsolation: "shared"外部组件和自定义组件都可以相互影响
    styleIsolation: "shared"
  },
  properties: {

  },
  data: {

  }
})
