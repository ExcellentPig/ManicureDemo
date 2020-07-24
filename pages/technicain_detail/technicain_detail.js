Page({
	data: {

	},
	navToBook(res) {
		wx.navigateTo({
			url: '../book/book',
			success(res) {
				wx.showNavigationBarLoading();
				wx.setNavigationBarTitle({
					title: '预约页'
				})
				setTimeout(() => {
					wx.hideNavigationBarLoading();
				}, 2000)
			}
		})
	}
})
