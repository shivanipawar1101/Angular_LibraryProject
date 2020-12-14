import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { UserFetch } from '../user-fetch';

import { Users } from '../users';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  constructor(public route: ActivatedRoute, public router: Router, public ds: DataService) { }
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
  update() {
    this.ds.updateUser(this.user).subscribe(data => {
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