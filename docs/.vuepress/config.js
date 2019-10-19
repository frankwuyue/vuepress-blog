module.exports = {
  title: 'Hello VuePress',
	description: 'Just playing around',
	themeConfig: {
		nav: [
			{ text: 'Code', link: '/code/' },
      { text: 'Finance', link: '/finance/' },
      { text: '中文', link: '/zh/' },
		],
		search: false,
		sidebar: {
			'/code/' : [
				'',
				'vue-blog'
			],

			'/finance/' : [
				''
			],

			'/zh/' : [
				''
			],

			'/' : [
				'',
				'about'
			]
		}
  }
}