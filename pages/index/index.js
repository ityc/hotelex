
Page({
  data: {
    // 选择城市
    city:"",
    bannerUrls: [
      { url: 'http://www.zhuotop.com/templets/zhuotop/img/upload/banner.jpg',linkUrl: ''},
      { url: 'http://www.zhuotop.com/templets/zhuotop/img/upload/banner.jpg',linkUrl: ''},
      { url: 'http://www.zhuotop.com/templets/zhuotop/img/upload/banner.jpg',linkUrl: ''}
    ],
    advUrls:[
      { url: 'http://www.zhuotop.com/templets/zhuotop/img/upload/ad.jpg', linkUrl: '' },
      { url: 'http://www.zhuotop.com/templets/zhuotop/img/upload/ad2.jpg', linkUrl: '' },
      { url: 'http://www.zhuotop.com/templets/zhuotop/img/upload/ad3.jpg', linkUrl: '' }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    intervals: 2500,
    durations: 800,
    click1: true,
    click2: false,
    click3: false,
    changeIndicatorDots: function (e) {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    },
    changeAutoplay: function (e) {
      this.setData({
        autoplay: !this.data.autoplay
      })
    },
    intervalChange: function (e) {
      this.setData({
        interval: e.detail.value
      })
    },
    durationChange: function (e) {
      this.setData({
        duration: e.detail.value
      })
    },
  },
  click1: function (e) {
    this.setData({
      click1: true,
      click2: false,
      click3: false,
    })
  },
  click2: function (e) {
    this.setData({
      click1: false,
      click2: true,
      click3: false,
    })
  },
  click3: function (e) {
    this.setData({
      click1: false,
      click2: false,
      click3: true,
    })
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
  //广告图
  advHeight: function (e) {
    var winWids = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
    var imghs = e.detail.height;//图片高度
    var imgws = e.detail.width;//图片宽度
    var swiperHs = winWids * imghs / imgws + "px"
    this.setData({
      Heights: swiperHs//设置高度
    })
  },
  actives:function(e){
    wx.navigateTo({
      url: '/pages/actives/actives',
    })
  },
  // 当前城市
  getLocation:function(){
    console.log(1);
    var that=this;
    wx.getLocation({
      type:'wgs84',
      success: function(res){
        console.log(res);
        wx.request({
          url: 'http://api.map.baidu.com/geocoder/v2/?ak=MFxYNCylUtvfaNU8PaKswM3SOdN8a3Yn&location=' + res.latitude + ',' + res.longitude + '&output=json&pois=1',
          data:{},
          header:{'Content-Type': 'application/json'},
          success:function(ops){
            console.log(ops.data);
            console.log(ops.data.result.pois);
            that.setData({
              city:ops.data.result.addressComponent.city
            })
          }
        })
      },
    })
  },
  // 选择城市跳转页面
  selectCity:function(){
    wx.navigateTo({
      url: '/pages/city/city',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    if(!options.city){
      this.getLocation();
    }else{
      that.setData({
        city:options.city
      })
    }
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
