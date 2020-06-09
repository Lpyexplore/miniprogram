// pages/category/childrenCpn/tab-control/tab-control.js
Component({
  properties: {
    tabs: {
      type: Array,
      value: []
    }
  },
  data: {
    
  },
  methods: {
    tabClick(e) {
      const index = e.currentTarget.dataset.index
      this.triggerEvent('tabClick', {index})
    }
  }
})
