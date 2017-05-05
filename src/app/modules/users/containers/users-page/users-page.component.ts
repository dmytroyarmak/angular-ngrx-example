import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'dy-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  users$: Observable<any>;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.users$ = this.usersService.getUsers();
  }

}
