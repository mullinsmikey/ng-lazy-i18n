import { FactoryProvider, InjectionToken } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators'

import { getLocaleLanguageCode, LanguageCode, LocalePartialState, Ti18nFactory } from '@lazy-i18n/core';
import { I18nTab2 } from './i18n.interface';

export const I18N_TAB2 = new InjectionToken<Observable<I18nTab2>>('I18N_TAB2');

export const i18nTab2Factory: Ti18nFactory<I18nTab2> = (store: Store): Observable<I18nTab2> =>
  (store as Store<LocalePartialState>).pipe(
    select(getLocaleLanguageCode),
    distinctUntilChanged(),
    switchMap((code: LanguageCode) => import(`./lang-${code}.lang`).then((l: { lang: I18nTab2 }) => l.lang)),
  );

export const i18nTab2Provider: FactoryProvider = { provide: I18N_TAB2, useFactory: i18nTab2Factory, deps: [Store] };
