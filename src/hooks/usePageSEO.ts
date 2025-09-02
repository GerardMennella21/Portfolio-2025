import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
}

export const usePageSEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | Gerard Mennella`;

    // Update meta description
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }

    // Update meta keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }

    // Update Open Graph title
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
      ogTitleTag.setAttribute('content', ogTitle || `${title} | Gerard Mennella`);
    }

    // Update Open Graph description
    if (ogDescription || description) {
      const ogDescTag = document.querySelector('meta[property="og:description"]');
      if (ogDescTag) {
        ogDescTag.setAttribute('content', ogDescription || description || '');
      }
    }

    // Update Twitter title
    const twitterTitleTag = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitleTag) {
      twitterTitleTag.setAttribute('content', ogTitle || `${title} | Gerard Mennella`);
    }

    // Update Twitter description
    if (ogDescription || description) {
      const twitterDescTag = document.querySelector('meta[name="twitter:description"]');
      if (twitterDescTag) {
        twitterDescTag.setAttribute('content', ogDescription || description || '');
      }
    }
  }, [title, description, keywords, ogTitle, ogDescription]);
};