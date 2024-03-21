import { defaultLang, ui } from '~/i18n/ui';

export type Language = keyof typeof ui;

export function useTranslations(lang: Language) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
