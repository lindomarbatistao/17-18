import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AutoresComponent } from './pages/authors/authors.component';
import { PublisherComponent } from './pages/publisher/publisher.component';
import { BooksComponents } from './pages/books/books.components';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'autores', component: AutoresComponent, canActivate: [authGuard]},
    {path: 'editoras', component: PublisherComponent, canActivate: [authGuard]},
    {path: 'livros', component: BooksComponents, canActivate: [authGuard]},
    {path: 'pesquisas', component: BooksComponents, canActivate: [authGuard]},
];
