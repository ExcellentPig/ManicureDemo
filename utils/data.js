//轮播图的数据
function getBannerData() {
	var arr = [
		'http://q9h6xkv6p.bkt.clouddn.com/banner_01.jpg',
		'http://q9h6xkv6p.bkt.clouddn.com/banner_02.jpg',
		'http://q9h6xkv6p.bkt.clouddn.com/banner_03.jpg',
		'http://q9h6xkv6p.bkt.clouddn.com/banner_04.jpg'
	];
	return arr;
}

function getIndexNavData() {

	var arr = [{
			id: 1,
			icon: 'http://q9h6xkv6p.bkt.clouddn.com/nav_icon_01.png',
			title: '推存'
		},
		{
			id: 2,
			icon: 'http://q9h6xkv6p.bkt.clouddn.com/nav_icon_02.png',
			title: '美甲'
		},
		{
			id: 3,
			icon: 'http://q9h6xkv6p.bkt.clouddn.com/nav_icon_03.png',
			title: '美容'
		},
		{
			id: 4,
			icon: 'http://q9h6xkv6p.bkt.clouddn.com/nav_icon_04.png',
			title: '美发'
		},
		{
			id: 5,
			icon: 'http://q9h6xkv6p.bkt.clouddn.com/nav_icon_05.png',
			title: '美睫'
		}
	]
	return arr;
}

function getIndexNavSectionData() {
	var arr = [
		[{
				subject: "睫毛稀疏 种睫毛来帮忙",
				civerpath: "http://q9h6xkv6p.bkt.clouddn.com/recommend_01.jpg",
				price: "￥100",
				message: '先的企业级云服务商,致力于打造以数据为核心的场景化 PaaS服务'

			},
			{
				subject: "爱丽克EircParisSalon",
				civerpath: "http://q9h6xkv6p.bkt.clouddn.com/recommend_06.jpg",
				price: "￥1150",
				message: '的PaaS云服务.七牛存储 七牛云为企业提供对象存储服'
			},
			{
				subject: "伊本造型",
				civerpath: "http://q9h6xkv6p.bkt.clouddn.com/recommend_02.jpg",
				price: "￥1047",
				message: '伊本造型是由著名形象设计师杨进先生创办。'
			},
			{
				subject: "秋季自然特价美甲",
				civerpath: "http://q9h6xkv6p.bkt.clouddn.com/recommend_03.jpg",
				price: "￥187",
				message: '我们最求得是没有最长的时间特价'

			},
			{
				subject: "画对了妆，微微一笑颜值倍儿高！",
				civerpath: "http://q9h6xkv6p.bkt.clouddn.com/recommend_04.jpg",
				price: "￥87",
				message: '《微微一笑很倾城》的剧照简直美腻到不要不要的'
			}
		],
		[{
				subject: "秋季自然特价美甲",
				civerpath: "http://q9h6xkv6p.bkt.clouddn.com/recommend_01.jpg",
				price: "￥187",
				message: '我们最求得是没有最长的时间特价'
			},
			{
				subject: "睫毛稀疏 种睫毛来帮忙",
				civerpath: "http://q9h6xkv6p.bkt.clouddn.com/recommend_06.jpg",
				price: "￥100",
				message: '先的企业级云服务商,致力于打造以数据为核心的场景化 PaaS服务'
			},

			{
				subject: "爱丽克EircParisSalon",
				civerpath: "http://q9h6xkv6p.bkt.clouddn.com/recommend_04.jpg",
				price: "￥1150",
				message: '的PaaS云服务.七牛存储 七牛云为企业提供对象存储服'
			},
			{
				subject: "画对了妆，微微一笑颜值倍儿高！",
				civerpath: "http://q9h6xkv6p.bkt.clouddn.com/recommend_03.jpg",
				price: "￥87",
				message: '《微微一笑很倾城》的剧照简直美腻到不要不要的'
			}
		],
		[{

				subject: "秋季自然特价美甲",
				civerpath: "http://q9h6xkv6p.bkt.clouddn.com/recommend_06.jpg",
				price: "￥187",
				message: '我们最求得是没有最长的时间特价'
			},
			{

				subject: "睫毛稀疏 种睫毛来帮忙",
				civerpath: "http://q9h6xkv6p.bkt.clouddn.com/recommend_05.jpg",
				price: "￥100",
				message: '先的企业级云服务商,致力于打造以数据为核心的场景化 PaaS服务'
			},
			{

				subject: "爱丽克EircParisSalon",
				civerpath: "http://q9h6xkv6p.bkt.clouddn.com/recommend_04.jpg",
				price: "￥1150",
				message: '的PaaS云服务.七牛存储 七牛云为企业提供对象存储服'
			}
		],
		[{
				subject: "秋季自然特价美甲",
				civerpath: "http://q9h6xkv6p.bkt.clouddn.com/recommend_03.jpg",
				price: "￥187",
				message: '我们最求得是没有最长的时间特价'
			},

			{
				subject: "睫毛稀疏 种睫毛来帮忙",
				civerpath: "http://q9h6xkv6p.bkt.clouddn.com/recommend_05.jpg",
				price: "￥100",
				message: '先的企业级云服务商,致力于打造以数据为核心的场景化 PaaS服务'
			}

		],
		[{
			subject: "睫毛稀疏 种睫毛来帮忙",
			civerpath: "http://q9h6xkv6p.bkt.clouddn.com/recommend_01.jpg",
			price: "￥100",
			message: '先的企业级云服务商,致力于打造以数据为核心的场景化 PaaS服务'

		}
		]
	]
	return arr;
}

function getSkillData(){

  var arr=[
    {
      company:"贵阳美容美发有限公司",
      avatar:"http://q9h6xkv6p.bkt.clouddn.com/killedt_img_01.jpg",
      nickname:'张技师',
      price:"￥500",
      message:"从事美发行有40余年，有丰富的经验,淑娴上手",
    },
    {
      company: "贵阳美容美发有限公司",
      avatar: "http://q9h6xkv6p.bkt.clouddn.com/killedt_img_02.jpg",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    },
    {
      company: "贵阳美容美发有限公司",
      avatar: "http://q9h6xkv6p.bkt.clouddn.com/killedt_img_01.jpg",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    },
    {
      company: "贵阳美容美发有限公司",
      avatar: "http://q9h6xkv6p.bkt.clouddn.com/skilledt_banner.png",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    },
    {
      company: "贵阳美容美发有限公司",
      avatar: "http://q9h6xkv6p.bkt.clouddn.com/killedt_img_01.jpg",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    },
    {
      company: "贵阳美容美发有限公司",
      avatar: "http://q9h6xkv6p.bkt.clouddn.com/skilledt_banner.png",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    }

  ]
  return arr
}

module.exports = {
	getBannerData: getBannerData,
	getIndexNavData: getIndexNavData,
	getIndexNavSectionData: getIndexNavSectionData,
	getSkillData: getSkillData
}
