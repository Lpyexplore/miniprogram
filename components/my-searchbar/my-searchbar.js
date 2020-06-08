// components/my-searchbar/my-searchbar.js
Component({
  properties: {

  },
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputClick() {
      this.triggerEvent('searchbarClick')
    }
  },
  externalClasses: ["background"]
})
