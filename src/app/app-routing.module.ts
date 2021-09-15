import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibrosComponent } from 'src/app/libros/libros.component';
import { IndexComponent } from 'src/app/index/index.component';

const routes: Routes = [
  {
    path:'Libros', component:LibrosComponent
  },
  {
    path:'Index', component:IndexComponent
  },
  {
    path:'', component:IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
