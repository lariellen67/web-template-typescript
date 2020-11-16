/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const actionsTypes = {
  SELECT_LANGUAGE: '@config/SELECT_LANGUAGE',
};

const baseSelector = (state: { config: any }) => state.config;

export function setLanguage({ language } : {language: any}) {
  return { type: actionsTypes.SELECT_LANGUAGE, payload: { language } };
}

export const selectors = {
  selectLanguage: (state: { config: any }) => baseSelector(state).language,
};
