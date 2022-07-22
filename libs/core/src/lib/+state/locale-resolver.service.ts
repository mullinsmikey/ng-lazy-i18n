import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CountryCode, LanguageCode, LocaleCodes, LocaleData } from '../locale';

@Injectable({ providedIn: 'root' })
export class LocaleResolverService {
    private static fromLocalStorage(): Partial<LocaleCodes> {
        const saved: string | null = localStorage.getItem('preferLocale');
        return saved ? JSON.parse(saved) : {};
    }

    public resolveLocale(prioritize?: Partial<LocaleCodes>): Observable<LocaleData> {
        const saved: Partial<LocaleCodes> = LocaleResolverService.fromLocalStorage();

        const langCode = (saved.langCode || prioritize?.langCode || 'en') as LanguageCode;
        const countryCode = (saved.countryCode || prioritize?.countryCode || 'US') as CountryCode;

        return of({
          language: { code: langCode, title: langCode },
          country: { code: countryCode, title: countryCode },
        });
    }
}
