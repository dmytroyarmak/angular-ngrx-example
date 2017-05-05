import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './services/users/users.service';
import { UsersPageComponent } from './containers/users-page/users-page.component';
import { UsersComponent } from './components/users/users.component';
import { reducer } from './reducers/users/users.reducer';
import { UsersEffects } from './effects/users/users.effects';

@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(UsersEffects)
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
