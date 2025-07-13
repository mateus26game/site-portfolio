import { Component } from '@angular/core';
import { ProjetosService } from '../../services/projeto';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.html',
  styleUrls: ['./projeto.css'],
  standalone:false
})
export class Projetoo {
  projetoAny: any[] = [];
  projetoExpandidoIndex: number | null = null;

  constructor(private projeto: ProjetosService) {}

  ngOnInit(): void {
    this.projetoAny = this.projeto.getProjetos();
  }

  toggleDetalhes(index: number): void {
    this.projetoExpandidoIndex = this.projetoExpandidoIndex === index ? null : index;
  }
}
