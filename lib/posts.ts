import { allPosts } from 'contentlayer/generated';

export const getPosts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
};

export const getPost = (slug: string) => {
  return allPosts.find((e) => e._raw.flattenedPath === slug);
};
