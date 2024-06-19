import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description?: string;
}

export default function createMetadata(props: SEOProps): Metadata {
  const { title, description } = props;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Jade.Dev Blog`,
      description: description || 'Jade.Dev 개발 블로그입니다.',
      url: './',
      siteName: 'Jade.Dev Blog',
      locale: 'ko',
      type: 'website',
    },
  };
}
