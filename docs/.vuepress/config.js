module.exports = {
	title: 'Hello VuePress',
	description: 'Just playing around',
	themeConfig: {
		nav: [{
				text: 'Code',
				link: '/code/'
			},
			{
				text: 'Finance',
				link: '/finance/'
			},
			{
				text: '中文',
				link: '/zh/'
			},
			{
				text: 'Other',
				link: '/other/'
			},
			{
				text: 'GitHub',
				link: 'https://github.com/frankwuyue/vuepress-blog'
			},
		],
		search: false,
		sidebar: {
			'/code/': [
				'',
				'spring'
			],

			'/finance/': [
				''
			],

			'/zh/': [
				'',
				'2019-todo-list'
			],

			'/': [
				'',
				'about'
			]
		}
	}
}