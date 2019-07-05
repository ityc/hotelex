// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerUrls: [
      { url: '../images/banner2.jpg', linkUrl: '' },
      { url: '../images/banner3.jpg', linkUrl: '' },
      { url: '../images/banner2.jpg', linkUrl: '' }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    intervals: 2500,
    durations: 800,
    // 列表
    list:[
      { title: "公司名称公司名称", msg:"E1A01EE1A01EE1A01EE1A01EE1A01",num:"展位号E1A01E"},
      { title: "公司名称公司名称", msg:"E1A01EE1A01EE1A01EE1A01EE1A01",num:"展位号E1A01E"},
      { title: "公司名称公司名称", msg:"E1A01EE1A01EE1A01EE1A01EE1A01",num:"展位号E1A01E"},
      { title: "公司名称公司名称", msg:"E1A01EE1A01EE1A01EE1A01EE1A01",num:"展位号E1A01E"},
    ],
    id:0
  },
  //轮播高度自适应——获取图片高度
  imgHeight: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
    var imgh = e.detail.height;//图片高度
    var imgw = e.detail.width;//图片宽度
    var swiperH = winWid * imgh / imgw + "px"
    this.setData({
      Height: swiperH//设置高度
    })
  },
  // tab切换
  change:function(e){
    this.setData({
      id:e.currentTarget.dataset.id
    })
  },  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

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