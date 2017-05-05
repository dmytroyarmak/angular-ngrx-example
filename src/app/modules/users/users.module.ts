import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './services/users/users.service';
import { UsersPageComponent } from './containers/users-page/users-page.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule
  ],
  providers: [
    UsersService
  ],
  declarations: [
    UsersPageComponent,
    UsersComponent
  ]
})
export class UsersModule { }
