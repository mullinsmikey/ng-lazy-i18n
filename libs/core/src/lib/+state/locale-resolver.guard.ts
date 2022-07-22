import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { LocaleData } from '../locale/locale-data.types';
import { localeResolve } from './locale.actions';
import { LocalePartialState } from './locale.reducer';
import { getLocaleData_ } from './locale.selectors';

@Injectable()
export class LocaleResolverGuard implements CanActivate {
    constructor(private store: Store<LocalePartialState>) {}
    public canActivate(): Observable<boolean> {
        return this.store.pipe(
            select(getLocaleData_),
            switchMap((localeData: LocaleData | undefined) => {
                if (localeData) {
                    return of(true);
                }
                this.store.dispatch(localeResolve({}));
                return this.store.pipe(
                    select(getLocaleData_),
                    filter(Boolean),
                    map(() => true),
                );
            }),
        );
    }
}
