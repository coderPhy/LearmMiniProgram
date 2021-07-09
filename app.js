App({
  globalData: {
    token: ''
  },
  onLaunch() {
    // 先从缓冲中取出token
    const token = wx.getStorageSync('token')
    console.log(token);

    // 判断token是否有值gfd32yt 
    if(token && token.length !== 0) { // 已有token,验证token是否过期
      this.check_token(token); // 验证token是否过期
    }else { // 没有token,进行登录操作
      this.login();
    }
  },
  login() {
    // 登录操作
    wx.login({
      // code只有五分钟有效期
      success:(res) => {
        const code = res.code; 
        console.log("code",code);
        wx.request({
          url: 'http://152.136.185.210:7878/api/m5/login',
          // url: "123.207.32.32:3000/login",
          method: "post",
          header: {
            'content-type': 'json' 
          },
          data: { 
            code
          },
          success: (res) => {
            console.log(res);
            const  token = res.data.token;
            this.globalData.token = token;
            wx.setStorageSync('token', token)
          },
          fail:(err) => {
            console.log(err); 
          }
        })
      }
    })
  },
  check_token(token) {
    wx.request({
      url: 'http://152.136.185.210:7878/api/m5/auth',
      // url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      data: {
        
      },
      header: {
        'content-type': 'json' ,
        token
      },
      success:(res) => {
        console.log(res);
        if(!res.data.errCode) {
          this.globalData.token = token;
        }else {
          this.login();
        }
      },
      fail: (err) => {
        console.log(err); 
      }
    })
  }
})