import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://amdylabs.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://amdylabs.com/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://amdylabs.com/projects', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://amdylabs.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://amdylabs.com/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.9 },
  ]
}
