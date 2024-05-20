import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@hooks';
import { layouts } from '@layouts';

import { ShieldProps } from './Shield.types';

export const Shield = ({ layout, role }: ShieldProps) => {
  const {
    loggedIn,
    user: { roles: userRoles },
  } = useAuth();

  const isAuthenticated: boolean = loggedIn && userRoles.includes(role);

  const Layout = layouts[layout];

  if (role === 'public' || role === '*')
    return (
      <Layout>
        <Outlet />
      </Layout>
    );

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
