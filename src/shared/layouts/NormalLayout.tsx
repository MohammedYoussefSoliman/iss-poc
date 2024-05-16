import { LayoutProps } from './layout.types';

const NormalLayout = ({ children }: LayoutProps) => {
  return (
    <main>
      <header>app header</header>
      {children}
      <footer>app footer</footer>
    </main>
  );
};

export default NormalLayout;
