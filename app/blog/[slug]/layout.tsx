import ScrollTopButton from '@/components/ScrollTopButton';

export default function BlogDetailLayout({ children }) {
  return (
    <div>
      {children}
      <ScrollTopButton />
    </div>
  );
}
