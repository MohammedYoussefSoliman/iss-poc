import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persister } from '@state';
import '@locales';

import AppSetup from './AppSetup';

const Providers = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate
        loading={<span>loading persisted Data</span>}
        persistor={persister}
      >
        <AppSetup />
      </PersistGate>
    </ReduxProvider>
  );
};

export default Providers;
