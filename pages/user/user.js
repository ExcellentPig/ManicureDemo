var app = getApp();
Page({
	data: {
		userInfo: {}
	},
	onLoad(res) {
		var that = this;
		app.getUserInfo(function(userInfo) {
			that.setData({
				userInfo: userInfo
			})
		});
	},
	map_btn(res) {
		wx.getLocation({
			type: 'gcj02',
			success(res) {
				const latitude = res.latitude
				const longitude = res.longitude
				const speed = res.speed
				const accuracy = res.accuracy
				//console.log(res)
				wx.openLocation({
					latitude,
					longitude,
					scale: 18
				})
			}
		})
	}
})
