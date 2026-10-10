export type GameStage = 'beta' | 'kickstarter' | 'store';

export interface StageCTA {
	label: string;
	href: string;
	/** Set for direct file downloads (e.g. a PDF) so the browser saves the file instead of navigating. */
	download?: boolean;
}

export const stageLabels: Record<GameStage, string> = {
	beta: 'Free Beta',
	kickstarter: 'Kickstarter Live',
	store: 'Available Now',
};

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
	/** Transparent title/logo art shown in place of the plain-text game name on the game's page. */
	titleArt?: string;
	/** Wide banner image for the game's hero section. Omit to render a generated abstract placeholder. */
	banner?: string;
	href: string;
	status: 'live' | 'coming-soon';
	/**
	 * Where this game is in its funnel: friends & family beta → Kickstarter campaign → storefront.
	 * Drives the primary CTA and badge on the game's page and homepage card. Omit for games
	 * (like a shipped mobile game) that don't go through this funnel.
	 */
	stage?: GameStage;
	/**
	 * The single primary call-to-action for the current `stage` (e.g. "Download the Print & Play",
	 * "Back Us on Kickstarter", "Buy the Deck"). To advance a game to its next stage, update `stage`
	 * and `primaryCTA` together — no other code changes needed.
	 */
	primaryCTA?: StageCTA;
	/** Optional alternate way to get the game (e.g. an itch.io page), shown beside the primary CTA. */
	secondaryCTA?: StageCTA;
	/** Link to the feedback survey (Google Forms, Tally, etc.). The page shows a "coming soon" note until it's set. */
	survey?: StageCTA;
	/** Invite link to this game's Discord community. */
	discord?: string;
}

export const games: Game[] = [
	{
		slug: 'tranquil-pond',
		name: 'Tranquil Pond',
		tagline: 'tranquility is a ripple away',
		icon: '/images/tranquil-pond-icon.png',
		banner: '/images/tranquil-pond-banner.png',
		accent: '#ee7a90',
		href: '/tranquil-pond',
		status: 'live',
	},
	{
		slug: 'gallery-gestalt',
		name: 'Gallery Gestalt',
		tagline: 'Make masterpieces for a gallery, together.',
		icon: '/images/gallery-gestalt-icon.webp',
		accent: '#e8577a',
		accent2: '#f2a154',
		banner: '/images/gallery-gestalt-banner.webp',
		titleArt: '/images/gallery-gestalt-title.webp',
		href: '/gallery-gestalt',
		status: 'live',
		stage: 'beta',
		primaryCTA: {
			label: 'Download the PDF',
			// Served from public/downloads/. Swap the file there to publish a new beta build.
			href: '/downloads/gallery-gestalt-beta.pdf',
			download: true,
		},
		secondaryCTA: {
			label: 'Get it on itch.io',
			href: 'https://scifiku.itch.io/gallery-gestalt',
		},
		discord: 'https://discord.gg/uyCXNkZ7dx',
		survey: {
			label: 'Take the survey',
			href: 'https://docs.google.com/forms/d/e/1FAIpQLSeFuvS4mP5q2KSSetCIHy4u86RlODoSypOqPVojKqyeTymh5g/viewform',
		},
	},
];
