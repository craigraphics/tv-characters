import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // instantiate users to an empty array
  users: any = [];

  constructor(private UsersService: UsersService, private router: Router) { }

  deleteUser( id ) {
    this.UsersService.deleteUser( id ).subscribe(() => {
      this.getAllUsers();
    });
  }

  getAllUsers() {
    this.UsersService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  ngOnInit() {
    // Retrieve users from the API
    this.getAllUsers();
  }
}
