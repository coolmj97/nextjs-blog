import { allPosts } from 'contentlayer/generated';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const blogRoutes = allPosts.map((post) => ({
    url: `${siteUrl}/blog/${post._id.split('.')[0]}`,
    lastModified: post.date,
  }));

  const routes = ['', 'about', 'blog'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogRoutes];
}
