module.exports = {
	title: 'Vue Js Bootcamp',
	dest: './public',
	base: '/gorilla-cast-docs/',
	themeConfig: {
		repo: 'https://github.com/ogranadagl/gorilla-cast',
		repoLabel: 'Repo',
		docsDir: 'src',
		editLinks: false,
		logo: '/image.png',
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Introduction', link: '/intro/' }
		],
		version: '0.11.0-beta',
		sidebar: [
			'',
			{
				title: 'Lifecycle', 
				collapsable: false,
				children: [
					['/lifecycle/', 'Introduction'],
					['/lifecycle/components/components', 'Components'],
					['/lifecycle/hooks/hooks', 'Hooks'],
				],
			},
			{
				title: 'Communication',
				collapsable: false,
				children: [
					['/communication/props/props', 'Props'],
					['/communication/event-emitter/emitter', 'Event Emitter Pattern'],
					['/communication/communication-task/task', 'Communication Task'],
				]
			},
			{
				title: 'Routing',
				collapsable: false,
				children: [
					['/routing/', 'Introduction'],
					['/routing/basic-routing/basic', 'Basic Routing'],
					['/routing/dynamic-routing/dynamic', 'Dynamic Routing'],
					['/routing/lazy-loading/lazy-loading', 'Lazy Loading'],
					['/routing/routing-task/task', 'Routing Task'],
				]
			},
			{
				title: 'Vuex',
				collapsable: false,
				children: [
					['/stores/', 'Flux Pattern'],
					['/stores/vuex/vuex', 'Vuex'],
					['/stores/vuex-task/task', 'Vuex Task']
				]
			}
		]
	},
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: 'UA-92645815-3'
			}
		],
		[
			'vuepress-plugin-rss',
			{
				base_url: '/',
				site_url: 'https://www.bencodezen.io',
				filter: frontmatter => frontmatter.date <= new Date(),
				count: 20
			}
		]
	],
	head: [
		['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' }],
		['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' }],
		['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' }],
		['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' }],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '114x114',
				href: '/apple-icon-114x114.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '120x120',
				href: '/apple-icon-120x120.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '144x144',
				href: '/apple-icon-144x144.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '152x152',
				href: '/apple-icon-152x152.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-icon-180x180.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '192x192',
				href: '/android-icon-192x192.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '96x96',
				href: '/favicon-96x96.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png'
			}
		],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
		['meta', { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }],
		['meta', { name: 'theme-color', content: '#ffffff' }]
	]
};
