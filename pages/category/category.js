// pages/category/category.js
Page({
  data: {
    //tab-control的列表数据
    tabs: [
      {title: '热门推荐', img: '/pages/category/assets/recommend.png'},
      {title: '关注列表', img: '/pages/category/assets/like.png'},
      {title: '用户反馈', img: '/pages/category/assets/comment.png'},
      {title: '更多工具', img: '/pages/category/assets/more.png'}
    ]
  },
  searchbarClick() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  }
})