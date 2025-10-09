import { Component, inject, signal } from '@angular/core';
import { LivroService } from '../../services/livros.service';
import { AuthService } from '../../services/auth.services';
import { Livro } from '../../models/livro';

@Component({
  selector: 'app-books.components',
  imports: [],
  templateUrl: './books.components.html',
  styleUrl: './books.components.css'
})
export class BooksComponents {
  private svc = inject(LivroService);
  private auth = inject(AuthService);   //Ver o token
  livro = signal<Livro[]>([]);
  carregando = signal(true);
  erro = signal<string | null>(null);

  constructor() {
    console.log("Token de acesso: ", this.auth.token());
    
    this.svc.listar().subscribe({
      next: (data) => { this.livro.set(data); this.carregando.set(false); },
      error: () => { this.erro.set('Falha ao carregar livro'); this.carregando.set(false); }
    });
  }
}
