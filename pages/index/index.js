var app = getApp();
var fileData = require('../../utils/data.js');

Page({
	data: {
		banner_url: fileData.getBannerData(),
		interval: 3000,
		duration: 1000,
		vertical: false,
		indicatordots: true,
		autoplay: true,
		navTopItems: fileData.getIndexNavData(),
		curNavId: 1,
		curNavIndex: 0,
		colors: ['red','orange','yellow','green','purple'],
		navSectionItems: fileData.getIndexNavSectionData(),
		list: []
	},
	onLoad(){
		//console.log(this.data.banner_url)
		//console.log(this.data.navTopItems)
		//console.log(this.data.navSectionItems);
		
		wx.showToast({
			title: '正在加載...',
			icon: 'loading',
			duration: 10000,
			mark: true
		});
		
		setTimeout(()=>{
			wx.hideToast();
		},2000);
		
		this.setData({
			list: this.data.navSectionItems
		})
		
	},
	switchTap(res){
		//console.log(res)
		let id = res.currentTarget.dataset.id;
		let index = res.currentTarget.dataset.index;
		this.setData({
			curNavId: id,
			curNavIndex: index
		})
	},
	loadMore(res){ //需要在给scroll-view设置高度
		//console.log(res,'底部')
		var curId = this.data.curNavIndex;
		if(this.data.list[curId] == 0){
			return
		}else{
			wx.showToast({
				title: '加载中...',
				icon: 'loading',
				duration: 2000
			})
			var that = this;
			that.data.list[curId] = that.data.list[curId].concat(that.data.list[curId]);
			that.setData({
				list: that.data.list
			})
		}
	},
	navigateDetail(res){
		//console.log(res);
		wx.navigateTo({
			url: '../detail/detail',
			success(res){
				wx.showNavigationBarLoading();
				wx.setNavigationBarTitle({
					title: '详情页'
				})
				setTimeout(()=>{
					wx.hideNavigationBarLoading();
				},2000)
			}
		})
	},
	bookTap(res){
		wx.navigateTo({
			url: '../book/book',
			success(res){
				wx.showNavigationBarLoading();
				wx.setNavigationBarTitle({
					title: '预约页'
				})
				setTimeout(()=>{
					wx.hideNavigationBarLoading();
				},2000)
			}
		})
	}
})
