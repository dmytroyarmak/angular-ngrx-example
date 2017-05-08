import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';

import { UsersService } from './services/users/users.service';
import { FollowersService } from './services/followers/followers.service';

import { UsersPageComponent } from './containers/users-page/users-page.component';
import { FollowersContainerComponent } from './containers/followers-container/followers-container.component';

import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';

import { reducer } from './reducers';
import { UsersEffects } from './effects/users/users.effects';
import { FollowersEffects } from './effects/followers/followers.effects';


@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(UsersEffects),
    EffectsModule.run(FollowersEffects)
  ],
  providers: [
    UsersService,
    FollowersService
  ],
  declarations: [
    UsersPageComponent,
    FollowersContainerComponent,
    UsersComponent,
    UserComponent
  ]
})
export class UsersModule { }
