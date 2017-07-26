import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  user: any = {};

  constructor(private UsersService: UsersService, private router: Router) { }

  onSubmit() {
    this.UsersService.newUser( this.user ).subscribe(user => {
      this.user = user;
      console.log(this.user);
      this.router.navigate(['users']);
    });
  }

  ngOnInit() {
  }

}
