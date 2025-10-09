import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AutoresComponent } from './pages/authors/authors.component';
import { PublisherComponent } from './pages/publisher/publisher.component';
import { BooksComponents } from './pages/books/books.components';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'autores', component: AutoresComponent},
    {path: 'editoras', component: PublisherComponent},
    {path: 'livros', component: BooksComponents}
];
