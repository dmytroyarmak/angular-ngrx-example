import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { UsersService } from '../../services/users/users.service';
import { LoadAction } from '../../actions/users.actions';
import { State, getUsers } from '../../reducers/users/users.reducer';

@Component({
  selector: 'dy-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  users$: Observable<any>;

  constructor(
    private store: Store<State>,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.store.dispatch(new LoadAction());
    this.users$ = this.store.select(getUsers);
  }

}
