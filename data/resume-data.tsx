import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/icons'

export const RESUME_DATA = {
	name: 'Alexander Densley',
	initials: 'AD',
	location: 'Provo, Utah',
	locationLink: 'https://maps.app.goo.gl/6A2D6gmPxufhUXhn8',
	about: 'build, ship, scale, repeat',
	summary:
		'As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.',
	avatarUrl: 'https://avatars.githubusercontent.com/u/89933800?v=4',
	personalWebsiteUrl: 'https://alxnder.co',
	contact: {
		email: 'densley.alexander@gmail.com',
		tel: '+15033969929',
		social: [
			{
				name: 'GitHub',
				url: 'https://github.com/alexander-densley',
				icon: GitHubIcon,
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/alexander-densley/',
				icon: LinkedInIcon,
			},
			{
				name: 'X',
				url: 'https://x.com/alxnderco',
				icon: XIcon,
			},
		],
	},
	education: [
		{
			school: 'Brigham Young University',
			degree:
				"Bachelor's of Science in Computer Science and a minor in Entrepreneurship",
			start: '2018',
			end: '2024',
		},
	],
	work: [
		{
			company: 'Subtract',
			link: 'https://subtract.pro',
			badges: [],
			title: 'Co-founder / CTO',
			start: '2023',
			end: '2024',
			description:
				'Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL',
		},
		{
			company: 'nCino',
			link: 'https://ncino.com',
			badges: [],
			title: 'Software Engineer Intern',
			start: '2023',
			end: '2024',
			description:
				'Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL',
		},
		{
			company: 'Cotopaxi',
			link: 'https://www.cotopaxi.com',
			badges: [],
			title: 'Social Entrepreneur Fellow',
			start: '2022',
			end: '2024',
			description: 'Creating and testing software for LTE base stations',
		},
		{
			company: 'Y-Video',
			link: 'https://yvideo.byu.edu/',
			badges: ['Remote'],
			title: 'Full Stack Developer',
			start: '2022',
			end: '2023',
			description:
				'Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL',
		},
		{
			company: 'BYU Broadcasting',
			link: 'https://www.byutv.org/',
			badges: [],
			title: 'Infrastructure Engineer',
			start: '2022',
			end: '2022',
			description:
				'Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress',
		},
	],
	skills: [
		'JavaScript',
		'TypeScript',
		'React/Next.js',
		'tRPC',
		'Node.js',
		'GraphQL',
		'',
	],
	projects: [
		{
			title: 'Consultly',
			techStack: [
				'Side Project',
				'TypeScript',
				'Next.js',
				'Vite',
				'GraphQL',
				'WebRTC',
			],
			description: 'A platform to build and grow your online business',
			link: {
				label: 'consultly.com',
				href: 'https://consultly.com/',
			},
		},
		{
			title: 'Monito',
			techStack: ['Side Project', 'TypeScript', 'Next.js', 'Browser Extension'],
			description:
				'Browser extension that records everything happening in a web application',
			link: {
				label: 'monito.dev',
				href: 'https://monito.dev/',
			},
		},
		{
			title: 'Jarocki.me',
			techStack: ['Side Project', 'Next.js', 'MDX'],
			description:
				'My personal website and blog. Built with Next.js and Notion API',
			link: {
				label: 'github.com',
				href: 'https://jarocki.me/',
			},
		},
		{
			title: 'Minimal',
			techStack: ['Side Project', 'Next.js', 'Puppeteer'],
			description:
				'Minimalist calendars, habit trackers and planners generator',
			link: {
				label: 'useminimal.com',
				href: 'https://useminimal.com/',
			},
		},
		{
			title: 'Barepapers',
			techStack: ['Side Project', 'Next.js', 'Puppeteer'],
			description:
				'Generates beautiful wallpapers using random shapes and gradients',
			link: {
				label: 'barepapers.com',
				href: 'https://barepapers.com/',
			},
		},
		{
			title: 'Year progress',
			techStack: ['Side Project', 'TypeScript', 'Next.js'],
			description: 'Tracks current year progress and displays a countdown',
			link: {
				label: 'getyearprogress.com',
				href: 'https://getyearprogress.com/',
			},
		},
		{
			title: 'Parabol',
			techStack: [
				'Full Stack Developer',
				'TypeScript',
				'React',
				'Node.js',
				'GraphQL',
			],
			description:
				'The Agile meeting co-pilot that delivers better meetings with less effort',
			link: {
				label: 'github.com',
				href: 'https://parabol.co/',
			},
		},
		{
			title: 'Evercast',
			techStack: [
				'Lead Frontend Developer',

				'TypeScript',
				'React',
				'Node.js',
				'GraphQL',
			],
			description:
				'Creative collaboration platform that combines video conferencing and HD media streaming',
			link: {
				label: 'evercast.us',
				href: 'https://www.evercast.us/',
			},
		},
		{
			title: 'Mobile Vikings',
			techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
			description:
				'Android application for leading virtual mobile operator in Poland',
			link: {
				label: 'mobilevikings.pl',
				href: 'https://mobilevikings.pl/',
			},
		},
		{
			title: 'Howdy',
			techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
			description:
				'Howdy is a place for you to join communities you care about',
			link: {
				label: 'play.google.com',
				href: 'https://howdy.co/',
			},
		},
		{
			title: 'Tastycloud',
			techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
			description:
				'Android application for managing and displaying restaurant menus in kiosk mode',
			link: {
				label: 'tastycloud.fr',
				href: 'https://www.tastycloud.fr/',
			},
		},
		{
			title: 'Ambit',
			techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
			description:
				'Android application that helps with sharing your contact details',
		},
		{
			title: 'Bim',
			techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
			description:
				'Android application that helps with booking a table in a restaurants',
		},
		{
			title: 'Canal Digital GO',
			techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
			description:
				'Video streaming mobile application for Canal Digital subscribers',
		},
	],
} as const
