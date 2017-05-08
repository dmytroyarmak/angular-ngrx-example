import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { User } from '../../models/user.model';
import { LoadAction } from '../../actions/followers/followers.actions';
import { State, getFollowersByLogin } from '../../reducers';

@Component({
  selector: 'dy-followers-container',
  templateUrl: './followers-container.component.html',
  styleUrls: ['./followers-container.component.css']
})
export class FollowersContainerComponent implements OnInit, OnChanges {

  @Input() login: string;

  followers$: Observable<User[]>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['login']) {
      this.loadFollowers();
    }
  }

  loadFollowers() {
    if (this.login) {
      this.store.dispatch(new LoadAction({login: this.login}));
      this.followers$ = this.store.select(getFollowersByLogin(this.login));
    } else {
      this.followers$ = null;
    }
  }

}
