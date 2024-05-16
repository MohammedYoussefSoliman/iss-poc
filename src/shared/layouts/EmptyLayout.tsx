import { LayoutProps } from './layout.types';

const EmptyLayout = ({ children }: LayoutProps) => {
  return (
    <main>
      empty layout
      {children}
    </main>
  );
};

export default EmptyLayout;
