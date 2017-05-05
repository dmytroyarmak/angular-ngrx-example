import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { LOAD, LoadSuccessAction, LoadFailAction } from '../../actions/users.actions';
import { UsersService } from '../../services/users/users.service';

@Injectable()
export class UsersEffects {
    @Effect()
    loadUsers$: Observable<Action> = this.actions$
        .ofType(LOAD)
        .switchMap(() => {
            return this.usersService
                .getUsers()
                .map((users) => new LoadSuccessAction(users))
                .catch(() => Observable.of(new LoadFailAction()));
        });

    constructor(
        private actions$: Actions,
        private usersService: UsersService
    ) { }
}
