export interface Social {
	label: string;
	href: string;
}

/** Studio-wide social accounts. Shown in the footer and on game pages. */
export const socials: Social[] = [
	{ label: 'Instagram', href: 'https://www.instagram.com/doppelstudiosgames/' },
	// If the Bluesky handle is later switched to the domain handle (@doppelstudios.com), update this URL.
	{ label: 'Bluesky', href: 'https://bsky.app/profile/doppelstudiosgames.bsky.social' },
	{ label: 'TikTok', href: 'https://www.tiktok.com/@doppelstudiosgames' },
];

export const socialHandle = '@doppelstudiosgames';
