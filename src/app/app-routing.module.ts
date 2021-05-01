import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoComponent } from './exercises/e001/to-do/to-do.component';
import { E002Component } from './exercises/e002/e002.component';
import { E003Component } from './exercises/e003/e003.component';
import { E004Component } from './exercises/e004/e004.component';
import { E005Component } from './exercises/e005/e005.component';
import { E006Component } from './exercises/e006/e006.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: '001', component: ToDoComponent},
  {path: '002', component: E002Component},
  {path: '003', component: E003Component},
  {path: '004', component: E004Component},
  {path: '005', component: E005Component},
  {path: '006', component: E006Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
