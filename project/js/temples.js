// js/temples.js
// Temple data used by main.js. Each object includes id, name, country, dedicated (ISO date), image path, alt, description.

const temples = [
    {
        id: 'bountiful-utah',
        name: 'Bountiful Utah Temple',
        country: 'United States',
        dedicated: '2000-10-08',
        image: 'image/bountiful_utah_temple_sunset.jpg',
        alt: 'Bountiful Utah Temple at sunset',
        description: 'An iconic temple serving the local community with beautiful grounds and spires.'
    },
    {
        id: 'tokyo-japan',
        name: 'Tokyo Japan Temple',
        country: 'Japan',
        dedicated: '1980-10-27',
        image: 'image/bountiful_utah_temple_sunset.jpg',
        alt: 'Exterior of Tokyo Japan Temple',
        description: 'First temple in Japan serving international and local members.'
    },
    {
        id: 'example-wireframe',
        name: 'Wireframe Example (for siteplan)',
        country: 'N/A',
        dedicated: '2025-01-01',
        image: 'image/wireframe-desktop.png',
        alt: 'Wireframe desktop image',
        description: 'Example asset used in the siteplan — not a real temple.'
    }
];

// export so other scripts can use if module-based, but main.js uses global fallback
if (typeof window !== 'undefined') {
    window.__temples_data = temples;
}
