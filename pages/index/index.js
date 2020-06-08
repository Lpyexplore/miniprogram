//index.js
//获取应用实例
const app = getApp()
import request from '../../utils/request'
Page({
  data: {
    //轮播图图片
    banners: []        
  },
  onLoad: function (options) {
    //请求轮播图数据
    request({
      url: 'http://152.136.185.210:8000/api/n3/home/multidata'
    })
    .then(data => {
      const banners = data.data.data.banner.list
      this.setData({
        banners
      })
    })
  },
  onReady: function () {
    
  },
  onShow: function () {
    
  },
  onHide: function () {
    
  },
  onUnload: function () {
    
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
