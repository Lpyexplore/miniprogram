import request from "../../utils/request"
Page({
  data: {
    //tab-control的列表数据
    tabs: [
      {title: '热门推荐', img: '/pages/category/assets/recommend.png'},
      {title: '关注列表', img: '/pages/category/assets/like.png'},
      {title: '用户反馈', img: '/pages/category/assets/comment.png'},
      {title: '更多工具', img: '/pages/category/assets/more.png'}
    ],
    //当前展示的tab的索引
    current_tab: 0,
    //热门推荐的列表数据
    recommends: [],
    //关注列表的列表数据
    collections: [],
    //用户反馈的列表数据
    comments: []
  },
  //搜索框的点击事件
  searchbarClick() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  //tab-control的点击事件
  tabClick(e) {
    //更新当前的列表展示的索引
    const current_tab = e.detail.index
    if(current_tab === 3) {
      //进行跳转
    }
    else {
      this.setData({
        current_tab
       })
    }
    
    //请求相应的列表数据
    
  }
})