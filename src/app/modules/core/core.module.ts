import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { CoreRoutingModule } from './core-routing.module';
import { RootComponent } from './components/root/root.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    CoreRoutingModule
  ],
  declarations: [RootComponent]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
