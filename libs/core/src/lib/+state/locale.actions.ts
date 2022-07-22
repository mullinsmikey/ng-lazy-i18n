import { createAction, props } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

import { LocaleCodes, LocaleData } from '../locale/locale-data.types';

export enum LocaleAction {
    LocaleSet = '[Locale] Locale Set',
    LocaleResolve = '[Locale] Locale Resolve',
    LocaleResolved = '[Locale] Locale Resolved',
}

//

export type ILocaleSetProps = Partial<LocaleCodes>;

export type ILocaleSet = TypedAction<LocaleAction.LocaleSet> & ILocaleSetProps;

export const localeSet = createAction(
    LocaleAction.LocaleSet,
    props<ILocaleSetProps>(),
);

export type ILocaleResolveProps = Partial<LocaleCodes>;

export type ILocaleResolve = TypedAction<LocaleAction.LocaleResolve> & ILocaleResolveProps;

export const localeResolve = createAction(
    LocaleAction.LocaleResolve,
    props<ILocaleResolveProps>(),
);

export type ILocaleResolvedProps = LocaleData;

export type ILocaleResolved = TypedAction<LocaleAction.LocaleResolved> & ILocaleResolvedProps;

export const localeResolved = createAction(
    LocaleAction.LocaleResolved,
    props<ILocaleResolvedProps>(),
);

//

export type LocaleActionsType = ILocaleResolve | ILocaleResolved;
