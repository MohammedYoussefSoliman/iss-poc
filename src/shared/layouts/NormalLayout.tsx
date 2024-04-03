import { Outlet } from 'react-router-dom';

const NormalLayout = () => {
  return (
    <main>
      normal layout
      <Outlet />
    </main>
  );
};

export default NormalLayout;
