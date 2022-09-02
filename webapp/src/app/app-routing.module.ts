import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcardsComponent } from './addcards/addcards.component';
import { HomeComponent } from './home/home.component';
import { ViewcardsComponent } from './viewcards/viewcards.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path:'addCards', component:AddcardsComponent},
  {path: 'viewCards', component:ViewcardsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
