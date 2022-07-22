import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabComponent } from './tab.component';
import { i18nTab2Provider } from '../../i18n';

@NgModule({
  declarations: [TabComponent],
  imports: [CommonModule],
  providers: [i18nTab2Provider],
})
export class TabModule {}
