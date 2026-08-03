export type GameStage = 'beta' | 'kickstarter' | 'store';

export interface StageCTA {
	label: string;
	href: string;
}

export const stageLabels: Record<GameStage, string> = {
	beta: 'Beta',
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
		status: 'live',
		stage: 'beta',
		primaryCTA: {
			label: 'Download the Print & Play',
			// TODO(ryan): replace with the actual beta file link (PDF host, Google Drive, itch.io, etc.)
			href: '#',
		},
	},
];
