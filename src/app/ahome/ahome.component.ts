import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Users } from '../users';

@Component({
  selector: 'app-ahome',
  templateUrl: './ahome.component.html',
  styleUrls: ['./ahome.component.scss']
})
export class AhomeComponent implements OnInit {


  users: Users[];
  user: string;
  title: string;
  shortDescription: string;
  thumbnailUrl: any;
  pageCount: number;
  status: string;
  author: string;
  subject_category: string;

  constructor(private router: Router, public ds: DataService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");

    this.ds.getDetails().subscribe(data => {
      console.log(data);
      this.users = data;
    })
    this.ds.getUsers().subscribe((response) => {
      this.users = response;
    })
  }

  deleteRow(val) {
    if (confirm("Are you sure want to Delete?")) {
      this.ds.deleteUser(val).subscribe(data => {

      });

      this.ds.getUsers().subscribe((response) => {
        this.users = response;


      })
    }
  }
  update(id) {
    this.router.navigate(['/update', id]);
  }
  add(users) {
    this.router.navigate(['/create', users]);
  }
  getData(user) {
    console.log(user.shortDescription);
    this.shortDescription = user.shortDescription;
    this.thumbnailUrl = user.thumbnailUrl;
    this.author = user.author;
    this.subject_category = user.subject_category;
    this.title = user.title;
    this.pageCount = user.pageCount;
  }

  logout() {
    if (window.confirm(this.user + ',Are you sure want to logout ?')) {
      this.router.navigate(['/']);
    }
  }
  searchText;


}

