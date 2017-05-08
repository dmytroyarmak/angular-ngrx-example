import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { LOAD, LoadAction, LoadSuccessAction, LoadFailAction } from '../../actions/followers/followers.actions';
import { FollowersService } from '../../services/followers/followers.service';

@Injectable()
export class FollowersEffects {
    @Effect()
    loadFollowers$: Observable<Action> = this.actions$
        .ofType(LOAD)
        .switchMap((loadAction: LoadAction) => {
            const { login } = loadAction.payload;

            return this.followersService
                .getFollowers(login)
                .map((followers) => new LoadSuccessAction({ login, followers }))
                .catch(() => Observable.of(new LoadFailAction({ login })));
        });

    constructor(
        private actions$: Actions,
        private followersService: FollowersService
    ) { }
}
