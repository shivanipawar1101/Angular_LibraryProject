import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  user = localStorage.getItem("user");

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  routeWithQueryParams($event) {
    const selectedRoute = $event.target.innerHTML;
   // alert(selectedRoute);
    if (selectedRoute == 'Admin Login') {
      this.router.navigate(['/login'], { queryParams: { val: 'admin' }});
    } else if(selectedRoute == 'User Login'){
      this.router.navigate(['/login'], { queryParams: { val: 'user' }});
    }else{
      this.router.navigate(['/about']);
    }

  }
}
