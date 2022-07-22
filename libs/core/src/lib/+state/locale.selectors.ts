import { createFeatureSelector, createSelector } from '@ngrx/store';

import { LanguageCode } from '../locale/languages';
import { LocaleData } from '../locale/locale-data.types';
import { LOCALE_FEATURE_KEY, LocaleStateModel } from './locale.reducer';

// Lookup the 'Locale' feature state managed by NgRx
export const getLocaleState = createFeatureSelector<LocaleStateModel>(LOCALE_FEATURE_KEY);

export const getLocaleData_ = createSelector(getLocaleState, (state): LocaleData | undefined => state.localeData);

export const getLocaleData = createSelector(getLocaleState, (state): LocaleData => state.localeData as LocaleData);

export const getLocaleLanguageCode = createSelector(getLocaleData, (state): LanguageCode => state.language.code);
