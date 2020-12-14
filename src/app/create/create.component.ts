import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../data.service';
import { UserFetch } from '../user-fetch';
import { Users } from '../users';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {


  constructor(private route: ActivatedRoute, public ds: DataService, private router: Router) { }

  val: any;
  users: Users[] = [];
  user: UserFetch;
  ngOnInit(): void {
    let sub = this.route.params.subscribe(params => {
      this.val = params['id'];
    });
    console.log("id: " + this.val);
    this.ds.getUpdateUser(this.val).subscribe(data => {
      this.user = data;
    })
  }


  add(user) {
    this.ds.createUser(this.user).subscribe(data => {
    });
    this.getUsers();
    this.router.navigate(['ahome']);
  }
  getUsers() {
    this.ds.getUsers().subscribe((response) => {
      this.users = response;
    });
  }
}