export interface Game {
	slug: string;
	name: string;
	tagline: string;
	/** Path to a square icon image. Omit to render an initials placeholder badge instead. */
	icon?: string;
	/** Letters shown in the placeholder badge when `icon` is omitted. Defaults to the first two letters of `name`. */
	initials?: string;
	accent: string;
	/** Optional second color for the placeholder badge gradient. Defaults to `accent`. */
	accent2?: string;
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
	{
		slug: 'gallery-gestalt',
		name: 'Gallery Gestalt',
		tagline: 'Make masterpieces for a gallery, together.',
		initials: 'GG',
		accent: '#e8577a',
		accent2: '#f2a154',
		href: '/gallery-gestalt',
		status: 'coming-soon',
	},
];
