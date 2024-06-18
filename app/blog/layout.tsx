import ScrollTopButton from '@/components/ScrollTopButton';

export default function BlogLayout({ children }) {
  return (
    <div>
      {children}
      <ScrollTopButton />
    </div>
  );
}
