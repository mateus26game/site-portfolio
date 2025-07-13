import { Component } from '@angular/core';
import { Projeto } from '../../services/projeto';

@Component({
  selector: 'app-projeto',
  standalone: false,
  templateUrl: './projeto.html',
  styleUrl: './projeto.css'
})
export class Projetoo {

  projetoAny: any[] = [];

  constructor(private projeto: Projeto){}

  ngOnInit(): void {
    this.projetoAny = this.projeto.getProjeto(); 
  }

}
