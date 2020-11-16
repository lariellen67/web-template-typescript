import { initReactI18next } from 'react-i18next';
import { useSelector } from 'react-redux';

import i18n from 'i18next';

import { selectors } from '~/store/modules/config/actions';

import enUS from './en-US';
import ptBR from './pt-BR';

export const languages = [
  'en-US', 'pt-BR',
];

export default function Languages() {
  const language = useSelector(selectors.selectLanguage);
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        'en-US': { translation: enUS },
        'pt-BR': { translation: ptBR },
      },
      lng: language || navigator.language,
      fallbackLng: 'en-US',

      interpolation: { escapeValue: false },
    });

  return null;
}

export function translate(key: any) {
  return i18n.t(key);
}
