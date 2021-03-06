import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllUsers() {
    return this.http.get('/api/users')
      .map(res => res.json());
  }

  newUser( user ) {
    return this.http.post('/api/users',  user )
      .map(res => res.json());
  }

  deleteUser( id ) {
    return this.http.delete(`/api/users/${id}`)
      .map(res => res.json());
  }

}
