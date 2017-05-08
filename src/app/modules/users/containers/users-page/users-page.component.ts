import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { User } from '../../models/user.model';
import { LoadAction } from '../../actions/users/users.actions';
import { State, getUsersEntities } from '../../reducers';

@Component({
  selector: 'dy-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new LoadAction());
    this.users$ = this.store.select(getUsersEntities);
  }

}
