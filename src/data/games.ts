export interface Game {
	slug: string;
	name: string;
	tagline: string;
	icon: string;
	accent: string;
	href: string;
	status: 'live' | 'coming-soon';
}

export const games: Game[] = [
	{
		slug: 'tranquil-pond',
		name: 'Tranquil Pond',
		tagline: 'tranquility is a ripple away',
		icon: '/images/tranquil-pond-icon.png',
		accent: '#ee7a90',
		href: '/tranquil-pond',
		status: 'live',
	},
];
