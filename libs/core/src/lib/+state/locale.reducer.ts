import { ActionReducer, createReducer, on } from '@ngrx/store';

import { LocaleCodes, LocaleData } from '../locale/locale-data.types';
import * as LocaleActions from './locale.actions';

export interface LocaleStateModel {
    localeData?: LocaleData;
    prioritize?: Partial<LocaleCodes>;
}

export const initialState: LocaleStateModel = {};

const localeReducer: ActionReducer<LocaleStateModel, LocaleActions.LocaleActionsType> = createReducer(
    initialState,
    on(
        LocaleActions.localeResolve,
        (state: LocaleStateModel, prioritize: LocaleActions.ILocaleResolveProps): LocaleStateModel =>
            Object.assign({}, state, { prioritize }),
    ),
    on(
        LocaleActions.localeResolved,
        (state: LocaleStateModel, localeData: LocaleActions.ILocaleResolvedProps): LocaleStateModel =>
            Object.assign({}, state, { localeData }),
    ),
);

/** import as localeReducer */
export function reducer(
    state: LocaleStateModel | undefined,
    action: LocaleActions.LocaleActionsType,
): LocaleStateModel {
    return localeReducer(state, action);
}

export const LOCALE_FEATURE_KEY = 'locale';

export interface LocalePartialState {
    readonly [LOCALE_FEATURE_KEY]: LocaleStateModel;
}
