import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://itersv.com',
      lastModified: new Date(),
    },
    {
      url: 'https://itersv.com/contact',
      lastModified: new Date(),
    },
  ]
}