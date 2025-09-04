const { SitemapStream, streamToPromise } = require('sitemap');
// Creates a sitemap object given the input configuration with URLs
const sitemap = new SitemapStream({ hostname: 'https://www.vizindustryfair.com' });
sitemap.write({ url: '/', changefreq: 'monthly', priority: 1 });
sitemap.write({ url: '/about/about-viz', changefreq: 'monthly', priority: 0.5 });
sitemap.write({ url: '/about/vif-committee', changefreq: 'monthly', priority: 0.5 });
sitemap.write({ url: '/event-information/for-students', changefreq: 'monthly', priority: 1 });
sitemap.write({ url: '/event-information/for-industry', changefreq: 'monthly', priority: 1 });
sitemap.write({ url: '/event-information/common-questions', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/schedule', changefreq: 'daily', priority: 1 });
sitemap.end();

// Resolves to a string containing the XML data
// ```xml
// <?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"><url><loc>http://example.com/page-1/</loc><changefreq>daily</changefreq><priority>0.3</priority></url><url><loc>http://example.com/page-2</loc></url></urlset>
// ```
streamToPromise(sitemap)
  .then((sm) => console.log(sm.toString()))
  .catch(console.error);
