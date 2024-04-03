import { useEffect } from 'react';

import { changeLanguage } from 'i18next';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';

import { useAppSelector, useAppDispatch, useAppRoutes } from '@hooks';
import routes from '@modules/routes';

const AppSetup = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('app');
  const {
    ui: { language },
  } = useAppSelector((state) => state);

  const router = useAppRoutes({ layout: 'normal', routes });

  useEffect(() => {
    changeLanguage(language);
  }, [dispatch, language]);

  return (
    <HelmetProvider>
      <Helmet
        title={t('appTitle')}
        htmlAttributes={{
          lang: language,
          dir: language === 'en' ? 'ltr' : 'rtl',
        }}
        bodyAttributes={{
          lang: language,
          dir: language === 'en' ? 'ltr' : 'rtl',
        }}
      ></Helmet>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

export default AppSetup;
