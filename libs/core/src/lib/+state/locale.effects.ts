import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import * as LocaleActions from './locale.actions';
import { LocaleResolverService } from './locale-resolver.service';

@Injectable()
export class LocaleEffects {
    // noinspection JSUnusedGlobalSymbols
    public localeSet$: Observable<LocaleActions.ILocaleResolve> = createEffect(() =>
        this.actions$.pipe(
            ofType(LocaleActions.localeSet),
            map(({ langCode, countryCode }: LocaleActions.ILocaleSet) => {
                const prevValue: string | null = localStorage.getItem('preferLocale');
                localStorage.setItem(
                    'preferLocale',
                    JSON.stringify(Object.assign(prevValue ? JSON.parse(prevValue) : {}, { langCode, countryCode })),
                );
                return LocaleActions.localeResolve({});
            }),
        ),
    );

    // noinspection JSUnusedGlobalSymbols
    public localeResolve$: Observable<LocaleActions.ILocaleResolved> = createEffect(() =>
        this.actions$.pipe(
            ofType(LocaleActions.localeResolve),
            mergeMap((prioritize: LocaleActions.ILocaleResolveProps) =>
                this.localeResolverService
                    .resolveLocale(prioritize)
                    .pipe(
                        map((localeData: LocaleActions.ILocaleResolvedProps) =>
                            LocaleActions.localeResolved(localeData),
                        ),
                    ),
            ),
        ),
    );

    constructor(private actions$: Actions, private localeResolverService: LocaleResolverService) {}
}
