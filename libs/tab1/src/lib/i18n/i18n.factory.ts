import { FactoryProvider, InjectionToken } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators'

import { getLocaleLanguageCode, LanguageCode, LocalePartialState, Ti18nFactory } from '@lazy-i18n/core';
import { I18nTab1 } from './i18n.interface';

export const I18N_TAB1 = new InjectionToken<Observable<I18nTab1>>('I18N_TAB1');

export const i18nTab1Factory: Ti18nFactory<I18nTab1> = (store: Store): Observable<I18nTab1> =>
  (store as Store<LocalePartialState>).pipe(
    select(getLocaleLanguageCode),
    distinctUntilChanged(),
    switchMap((code: LanguageCode) => import(`./lang-${code}.lang`).then((l: { lang: I18nTab1 }) => l.lang)),
  );

export const i18nTab1Provider: FactoryProvider = { provide: I18N_TAB1, useFactory: i18nTab1Factory, deps: [Store] };
