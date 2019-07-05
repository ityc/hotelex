// pages/actives/actives.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    animationData:{},
    num:1
  },
  // 弹出框
  select:function(e){
    var that=this;
    var animation=wx.createAnimation({
      duration:500,
      timingFunction:"ease",
      delay:0
    })
    that.animation=animation;
    animation.translateY(300).step();
    that.setData({
      animationData:animation.export(),
      show:true
    })
    setTimeout(()=>{
      animation.translateY(0).step();
      that.setData({
        animationData:animation.export()
      })
    },100);
  },
  // 隐藏遮罩层
  hideModal:function(){
    var animation=wx.createAnimation({
      duration:200,
      timingFunction:"ease",
      delay:0
    })
    this.animation=animation
    animation.translateY(300).step();
    this.setData({
      animationData:animation.export()
    })
    setTimeout(()=>{
      animation.translateY(0).step();
      this.setData({
        animationData:animation.export(),
        show:false
      })
    },200)
  },
  // 选择
  click(e){
    this.setData({
      num:e.target.dataset.num
    })
  },
  // 提交
  submit(){
    this.setData({
      show:false
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