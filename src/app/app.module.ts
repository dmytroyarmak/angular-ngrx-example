import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './modules/core/core.module';
import { RootComponent } from './modules/core/components/root/root.component';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
