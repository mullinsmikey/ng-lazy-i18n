import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap } from '@ngrx/store';

import { LOCALE_FEATURE_KEY, reducer as localeReducer } from '@lazy-i18n/core';

export const APP_REDUCER_TOKEN: InjectionToken<ActionReducerMap<unknown, Action>> = new InjectionToken<
    ActionReducerMap<unknown, Action>
>('App Reducer', {
    factory: () => ({
        [LOCALE_FEATURE_KEY]: localeReducer,
    }),
});
