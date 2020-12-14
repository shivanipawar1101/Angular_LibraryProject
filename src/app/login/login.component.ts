import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string
  password: string
  queryParams: any;

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.queryParams = params['val'];
    });

  }
  onsubmitLogin(loginForm) {
    
    console.log(loginForm.username);
    console.log(loginForm.password);
    localStorage.setItem('user', this.username);
    if (this.password == "admin") {
      this.router.navigate(['/ahome']);
    } else if (this.password == "user") {
      this.router.navigate(['/home']);
    } else {
      alert("Hello " + this.username + ", please check login credential !")
    }
  }
}
