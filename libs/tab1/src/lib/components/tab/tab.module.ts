import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TabComponent } from './tab.component';
import { i18nTab1Provider } from '../../i18n';

@NgModule({
  declarations: [TabComponent],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [i18nTab1Provider],
})
export class TabModule {}
