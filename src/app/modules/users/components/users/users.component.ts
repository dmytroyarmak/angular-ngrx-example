import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dy-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() users: [any];

  constructor() { }

  ngOnInit() {
  }

}
