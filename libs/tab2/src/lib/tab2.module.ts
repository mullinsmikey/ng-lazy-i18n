import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabComponent } from './components/tab/tab.component';
import { TabModule } from './components/tab/tab.module';

@NgModule({
  imports: [
    CommonModule,
    TabModule,
    RouterModule.forChild([{ path: '', component: TabComponent }]),
  ],
})
export class Tab2Module {}
