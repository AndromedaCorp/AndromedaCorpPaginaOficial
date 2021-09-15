import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibrosComponent } from 'src/app/libros/libros.component';
import { IndexComponent } from 'src/app/index/index.component';
import { CreateLibrosComponent } from 'src/app/libros/create-libros/create-libros.component';
import { IndexLibrosComponent } from 'src/app/libros/index-libros/index-libros.component';
import { DeleteLibrosComponent } from 'src/app/libros/delete-libros/delete-libros.component';

const routes: Routes = [
  {
    path:'Libros', component:LibrosComponent,children:[
      {
        path:'Create', component:CreateLibrosComponent
      },
      {
        path:'',component:IndexLibrosComponent
      },
      {
        path:'Delete', component:DeleteLibrosComponent
      }
    ]
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
