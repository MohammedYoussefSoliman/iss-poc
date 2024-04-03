import i18n from '@locales/i18n';
import { en as aboutEn } from '@modules/about/locales';
import { en as homeEn } from '@modules/home/locales';

i18n.addResourceBundle('en', 'app', {
  welcome: 'welcome',
  unifiedDocumentManagement: 'unified document management',
  socialDocuments: 'social document',
  fieldsDefinition: 'fields definition',
  documentsCopies: 'documents copies',
  documentCondition: 'document condition',
  ...homeEn,
  ...aboutEn,
});
