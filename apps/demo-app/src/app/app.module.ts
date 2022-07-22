import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { i18nCoreProvider, LocaleResolverGuard } from '@lazy-i18n/core';

import { AppEffects } from './+state/app.effects';
import { APP_REDUCER_TOKEN } from './+state/app.reducer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(APP_REDUCER_TOKEN, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
      },
    }),
    EffectsModule.forRoot(AppEffects),
    RouterModule.forRoot([{
      path: '',
      canActivate: [LocaleResolverGuard],
      children: [
        { path: 'tab1', loadChildren: () => import('@lazy-i18n/tab1').then((m) => m.Tab1Module) },
        { path: 'tab2', loadChildren: () => import('@lazy-i18n/tab2').then((m) => m.Tab2Module) },
        { path: '', pathMatch: 'full', redirectTo: 'tab1' },
      ],
    }]),
  ],
  providers: [i18nCoreProvider, LocaleResolverGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
