Page({
	data: {
		choose_name: '选择联系人',
		index: 0,
		range: [
			'贵州金阳新区，李先生，电话：18786056435',
			'安顺新区，王先生，电话：18786056435',
			'阳关小区，李先生，电话：18786056435',
			'大营坡王江小区，李先生，电话：18786056435',
			'贵州花溪金阳新区，李先生，电话：18786056435'
		],
		date: '2020-04-29',
		time: '11:19',
		showToastBol: true
	},
	nameChange(res) {
		//console.log(res);
		this.setData({
			index: res.detail.value
		})
	},
	dateChange(res){
		//console.log(res)
		this.setData({
			date: res.detail.value
		})
	},
	timeChange(res){
		//console.log(res)
		this.setData({
			time: res.detail.value
		})
	},
	bindToastTap(res){
		this.setData({
			showToastBol: false
		})
	},
	hideToast(){
		setTimeout(()=>{
			this.setData({
				showToastBol: true
			})
		},2000)
	}
})
