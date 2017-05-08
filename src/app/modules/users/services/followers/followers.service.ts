import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FollowersService {

  constructor(private http: Http) { }

  getFollowers(login: string) {
    return this.http
      .get(`https://api.github.com/users/${login}/followers`)
      .map((res) => res.json());
  }

}
