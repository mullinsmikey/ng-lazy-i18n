import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { I18N_CORE, I18nCore } from '@lazy-i18n/core';

import { I18N_TAB2, I18nTab2 } from '../../i18n';

@Component({
  selector: 'lazy-i18n-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
  constructor(
    @Inject(I18N_CORE) public readonly i18nCore$: Observable<I18nCore>,
    @Inject(I18N_TAB2) public readonly i18nTab2$: Observable<I18nTab2>,
  ) {}
}
