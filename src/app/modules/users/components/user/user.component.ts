import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../models/user.model';

@Component({
  selector: 'dy-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;

  showFollowers = false;

  constructor() { }

  ngOnInit() {
  }

  toggleFollowers() {
    this.showFollowers = !this.showFollowers;
  }
}
