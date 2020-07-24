var fileData = require('../../utils/data.js');
Page({
	data:{
		skillData: fileData.getSkillData(),
		list: [],
		caseArray:['美发','美容','美甲','美睫'],
		index:0
	},
	onLoad(){
		//console.log(this.data.skillData)
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
			list: this.data.skillData
		})
	},
	namechange(res){
		this.setData({
			index: res.detail.value
		})
	},
	loadMore(res){
		if(this.data.skillData.length == 0){
			return;
		}else{
			wx.showToast({
				title: '加载中...',
				icon: 'loading',
				duration: 2000
			})
			
			var that = this;
			that.data.list = that.data.list.concat(that.data.list );
			that.setData({
				list: that.data.list
			})
			
		}
	},
	navgetDetail(res){
		wx.navigateTo({
			url: '../technicain_detail/technicain_detail',
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
	}
})