import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx', //지정해주어야 post.body.code를 쓸 수 있음
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    desc: { type: 'string', required: true },
  },
}));

const rehypeOptions = {
  theme: 'slack-dark',
  keepBackground: true,
};

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    //@ts-expect-error
    rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
  },
});
