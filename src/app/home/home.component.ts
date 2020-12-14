import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Users } from '../users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: Users[];
  user: string;
  title: string;
  shortDescription: string;
  thumbnailUrl: any;
  pageCount: number;
  status: string;
  author: string;
  subject_category: string;


  constructor(private router: Router, public ds: DataService) {

  }

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
  return(user) {
    this.title = user.title;
    if (window.confirm('Are you sure want to Return ' + this.title + ' Book?')) {

    }
  }

  logout() {
    if (window.confirm(this.user + ', Are you sure want to Logout ?')) {
      this.router.navigate(['/']);
    }
  }

  getData(user): void {
    console.log(user.shortDescription);
    this.shortDescription = user.shortDescription;
    this.thumbnailUrl = user.thumbnailUrl;
    this.author = user.author;
    this.subject_category = user.subject_category;
    this.title = user.title;
    this.pageCount = user.pageCount;

  }
  add(user) {
    alert("Book Added Successfully")
  }
  searchText;

}
