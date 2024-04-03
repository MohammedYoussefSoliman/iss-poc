import i18n from '@locales/i18n';
import { ar as aboutAr } from '@modules/about/locales';
import { ar as homeAr } from '@modules/home/locales';

i18n.addResourceBundle('ar', 'app', {
  welcome: 'اهلاً وسهلاً',
  unifiedDocumentManagement: 'ادارة السجل الموحد',
  socialDocuments: 'السجلات الاجتماعية',
  fieldsDefinition: 'تعريف الحقول',
  documentsCopies: 'نسخ السجل',
  documentCondition: 'حالات السجل',
  ...homeAr,
  ...aboutAr,
});
