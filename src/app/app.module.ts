import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrosComponent } from './libros/libros.component';
import { IndexComponent } from './index/index.component';
import { CreateLibrosComponent } from './libros/create-libros/create-libros.component';
import { IndexLibrosComponent } from './libros/index-libros/index-libros.component';
import { DeleteLibrosComponent } from './libros/delete-libros/delete-libros.component';
import { EditLibrosComponent } from './libros/edit-libros/edit-libros.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    IndexComponent,
    CreateLibrosComponent,
    IndexLibrosComponent,
    DeleteLibrosComponent,
    EditLibrosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
