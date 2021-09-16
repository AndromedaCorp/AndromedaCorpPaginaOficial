import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibrosComponent } from 'src/app/libros/libros.component';
import { CreateLibrosComponent } from 'src/app/libros/create-libros/create-libros.component';
import { IndexLibrosComponent } from 'src/app/libros/index-libros/index-libros.component';
import { DeleteLibrosComponent } from 'src/app/libros/delete-libros/delete-libros.component';
import { EditLibrosComponent } from 'src/app/libros/edit-libros/edit-libros.component';

import { IndexComponent } from 'src/app/index/index.component';
import { LoginComponent } from 'src/app/login/login.component';

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
      },
      {
        path:'Edit',component:EditLibrosComponent
      }
    ]
  },
  {
    path:'Index', component:IndexComponent
  },
  {
    path:'', component:IndexComponent
  },
  {
    path:'Login', component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
