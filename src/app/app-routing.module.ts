import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AhomeComponent } from './ahome/ahome.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', component: LibraryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {path:'ahome',component:AhomeComponent},
  { path:'create', component: CreateComponent},
  { path:'update/:id', component: UpdateComponent},
  { path:'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
