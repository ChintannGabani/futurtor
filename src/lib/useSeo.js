import { useEffect } from 'react';

const SITE_NAME = 'Futuretor';
const SITE_URL = 'https://www.futuretor.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

function setMeta(attr, key, content) {
    if (!content) return;
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

function setLink(rel, href) {
    if (!href) return;
    let el = document.querySelector(`link[rel="${rel}"]`);
    if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
    }
    el.setAttribute('href', href);
}

/**
 * useSeo - sets per-page <title>, meta description, keywords, canonical, OG, Twitter tags.
 *
 * @param {object} opts
 * @param {string} opts.title - Page title (will be suffixed with site name)
 * @param {string} opts.description - Meta description (max ~160 chars)
 * @param {string} [opts.keywords] - Comma-separated keywords
 * @param {string} [opts.path] - Canonical path (e.g., "/about-us")
 * @param {string} [opts.image] - OG/Twitter image URL
 */
export default function useSeo({ title, description, keywords, path = '', image = DEFAULT_OG_IMAGE }) {
    useEffect(() => {
        const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
        const url = `${SITE_URL}${path}`;

        document.title = fullTitle;

        setMeta('name', 'title', fullTitle);
        setMeta('name', 'description', description);
        if (keywords) setMeta('name', 'keywords', keywords);

        // Canonical
        setLink('canonical', url);

        // Open Graph
        setMeta('property', 'og:title', fullTitle);
        setMeta('property', 'og:description', description);
        setMeta('property', 'og:url', url);
        setMeta('property', 'og:image', image);
        setMeta('property', 'og:type', 'website');
        setMeta('property', 'og:site_name', SITE_NAME);

        // Twitter
        setMeta('property', 'twitter:card', 'summary_large_image');
        setMeta('property', 'twitter:title', fullTitle);
        setMeta('property', 'twitter:description', description);
        setMeta('property', 'twitter:url', url);
        setMeta('property', 'twitter:image', image);
    }, [title, description, keywords, path, image]);
}
