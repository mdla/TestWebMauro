import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './view/contact/contact.component';
import { JobComponent } from './view/job/job.component';


import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './view/category/category.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'job',
    component: JobComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
