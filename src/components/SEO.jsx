import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_TITLE = 'ലഹരി നിർമ്മാർജന സമിതി (LNS) | ലഹരിമുക്ത സമൂഹത്തിനായി ജനകീയ മുന്നേറ്റം';
const DEFAULT_DESC = 'ലഹരിമുക്ത സമൂഹത്തിനായി ജനകീയ മുന്നേറ്റം. 24x7 ഹെൽപ്‌ലൈൻ: +91 95675 55661.';
const DEFAULT_KEYWORDS = 'ലഹരി നിർമ്മാർജന സമിതി, Lahari Nirmaargana Samithi, LNS Kerala, anti drug movement kerala, drug free kerala, വിമുക്തി, ലഹരിവിരുദ്ധ ക്യാമ്പയിൻ, campus vigilance, malappuram, 9567555661, www.laharinirmarjanasamithi.com';
const SITE_URL = 'https://www.laharinirmarjanasamithi.com';
const DEFAULT_IMAGE = '/og-image.jpg?v=2';

/**
 * Reusable SEO component that updates document head tags on route transitions
 */
const SEO = ({
  title,
  description = DEFAULT_DESC,
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_IMAGE,
  canonicalPath,
  type = 'website',
  schema
}) => {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = `${SITE_URL}${currentPath === '/' ? '' : currentPath}`;
  const pageTitle = title 
    ? (title.includes('ലഹരി നിർമ്മാർജന സമിതി') ? title : `${title} | ലഹരി നിർമ്മാർജന സമിതി (LNS)`)
    : DEFAULT_TITLE;
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  useEffect(() => {
    // 1. Page Title
    document.title = pageTitle;

    // Helper to set or create meta tag
    const setMetaTag = (attribute, name, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attribute, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'author', 'Lahari Nirmaargana Samithi (LNS)');
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 3. Open Graph / Facebook & WhatsApp Link Preview Tags
    setMetaTag('property', 'og:title', pageTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:image', imageUrl);
    setMetaTag('property', 'og:image:secure_url', imageUrl);
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    setMetaTag('property', 'og:image:type', imageUrl.endsWith('.png') ? 'image/png' : 'image/jpeg');
    setMetaTag('property', 'og:image:alt', pageTitle);
    setMetaTag('property', 'og:site_name', 'ലഹരി നിർമ്മാർജന സമിതി (LNS)');
    setMetaTag('property', 'og:locale', 'ml_IN');
    setMetaTag('property', 'og:locale:alternate', 'en_US');

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:domain', 'www.laharinirmarjanasamithi.com');
    setMetaTag('name', 'twitter:url', canonicalUrl);
    setMetaTag('name', 'twitter:title', pageTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', imageUrl);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 6. JSON-LD Schema.org Structured Data
    const schemaId = 'dynamic-seo-schema';
    let schemaScript = document.getElementById(schemaId);
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = schemaId;
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else if (schemaScript) {
      schemaScript.remove();
    }

  }, [pageTitle, description, keywords, canonicalUrl, imageUrl, type, schema]);

  return null;
};

export default SEO;
