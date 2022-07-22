import { FactoryProvider, InjectionToken } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators'

import { LocalePartialState } from '../+state/locale.reducer';
import { getLocaleLanguageCode } from '../+state/locale.selectors';
import { LanguageCode } from '../locale/languages';
import { Ti18nFactory } from '../locale/i18n.types';
import { I18nCore } from './i18n.interface';

export const I18N_CORE = new InjectionToken<Observable<I18nCore>>('I18N_CORE');

export const i18nCoreFactory: Ti18nFactory<I18nCore> = (store: Store): Observable<I18nCore> =>
  (store as Store<LocalePartialState>).pipe(
    select(getLocaleLanguageCode),
    distinctUntilChanged(),
    switchMap((code: LanguageCode) => import(`./lang-${code}.lang`).then((l: { lang: I18nCore }) => l.lang)),
  );

export const i18nCoreProvider: FactoryProvider = { provide: I18N_CORE, useFactory: i18nCoreFactory, deps: [Store] };
