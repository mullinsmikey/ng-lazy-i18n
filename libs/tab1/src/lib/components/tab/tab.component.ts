import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { getLocaleLanguageCode, I18N_CORE, I18nCore, localeSet } from '@lazy-i18n/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import { I18N_TAB1, I18nTab1 } from '../../i18n';

@Component({
  selector: 'lazy-i18n-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent implements OnInit, OnDestroy {
  public readonly languageFC = new FormControl('');

  private readonly destroy$: Subject<void> = new Subject<void>();

  constructor(
    @Inject(I18N_CORE) public readonly i18nCore$: Observable<I18nCore>,
    @Inject(I18N_TAB1) public readonly i18nTab1$: Observable<I18nTab1>,
    @Inject(Store) private readonly store: Store,
  ) {}

  public ngOnInit(): void {
    this.store.select(getLocaleLanguageCode)
      .pipe(take(1))
      .subscribe(langCode => this.languageFC.reset(langCode, { emitEvent: false }));

    this.languageFC.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(langCode => this.store.dispatch(localeSet({ langCode: langCode as string })));
  }

  public ngOnDestroy():void {
    this.destroy$.next();
  }
}
