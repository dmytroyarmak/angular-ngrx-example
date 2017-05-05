import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule
  ],
  declarations: []
})
export class UsersModule { }
