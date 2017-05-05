import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { RootComponent } from './modules/core/components/root/root.component';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
