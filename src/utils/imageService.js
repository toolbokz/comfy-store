const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

// Curated fallback images (permanent Unsplash URLs — no API call needed)
const FALLBACK_IMAGES = {
    hero: [
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=80&auto=format&fit=crop',
    ],
    categories: {
        sofas:
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&auto=format&fit=crop',
        dining:
            'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80&auto=format&fit=crop',
        bedroom:
            'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80&auto=format&fit=crop',
        decor:
            'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80&auto=format&fit=crop',
    },
    about:
        'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=80&auto=format&fit=crop',
    brand:
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80&auto=format&fit=crop',
    sustainability:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&q=80&auto=format&fit=crop',
    sustainabilityDetail:
        'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80&auto=format&fit=crop',
    craftsmanship:
        'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=1400&q=80&auto=format&fit=crop',
    craftsmanshipDetail:
        'https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?w=1200&q=80&auto=format&fit=crop',
};

export const fetchPexelsImages = async (query, perPage = 4) => {
    if (!PEXELS_API_KEY) return null;

    try {
        const response = await fetch(
            `https://api.pexels.com/v1/search?query=${encodeURIComponent(
                query
            )}&per_page=${perPage}&orientation=landscape`,
            {
                headers: {
                    Authorization: PEXELS_API_KEY,
                },
            }
        );

        if (!response.ok) throw new Error('Pexels API error');

        const data = await response.json();
        return data.photos.map((photo) => ({
            id: photo.id,
            src: photo.src.large2x,
            srcMedium: photo.src.medium,
            alt: photo.alt || query,
            photographer: photo.photographer,
        }));
    } catch {
        return null;
    }
};

export const fetchUnsplashImages = async (query, perPage = 4) => {
    if (!UNSPLASH_ACCESS_KEY) return null;

    try {
        const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
                query
            )}&per_page=${perPage}&orientation=landscape`,
            {
                headers: {
                    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
                },
            }
        );

        if (!response.ok) throw new Error('Unsplash API error');

        const data = await response.json();
        return data.results.map((photo) => ({
            id: photo.id,
            src: photo.urls.regular,
            srcMedium: photo.urls.small,
            alt: photo.alt_description || query,
            photographer: photo.user.name,
        }));
    } catch {
        return null;
    }
};

export const fetchHeroImages = async () => {
    const images = await fetchPexelsImages(
        'luxury modern living room furniture',
        4
    );
    if (images && images.length > 0) return images;

    const unsplashImages = await fetchUnsplashImages(
        'modern furniture interior',
        4
    );
    if (unsplashImages && unsplashImages.length > 0) return unsplashImages;

    return FALLBACK_IMAGES.hero.map((src, i) => ({
        id: `fallback-${i}`,
        src,
        srcMedium: src,
        alt: 'Premium furniture',
    }));
};

export const fetchCategoryImages = async () => {
    const images = await fetchPexelsImages(
        'modern furniture interior design',
        4
    );
    if (images && images.length > 0) return images;

    return Object.values(FALLBACK_IMAGES.categories).map((src, i) => ({
        id: `cat-fallback-${i}`,
        src,
        alt: 'Furniture category',
    }));
};

export { FALLBACK_IMAGES };
