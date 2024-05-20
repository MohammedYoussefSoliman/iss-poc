import { useAuth } from '@hooks';

const HomePage = () => {
  const { logout } = useAuth();

  return (
    <div>
      home
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default HomePage;
