import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

//add all routes here
//each object contains: the path's route parameter, followed by destination component
const routes: Routes = [
  {path:'', component:HomeComponent}, // the default route, Home page
  
 { path:'search/:searchTerm', component:HomeComponent},// page after searching item
 { path: 'tag/:tag', component: HomeComponent },
 { path: 'tag/:tag', component: HomeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
