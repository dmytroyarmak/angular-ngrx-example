import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(
    private http: Http
  ) { }

  getUsers() {
    return this.http
      .get('https://api.github.com/users')
      .map((res) => res.json());
  }

}
