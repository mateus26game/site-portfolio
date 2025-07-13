import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Cursos } from '../../services/cursos';

@Component({
  selector: 'app-formacao',
  standalone: false,
  templateUrl: './formacao.html',
  styleUrls: ['./formacao.css']
})
export class FormacaoComponent implements OnInit {

  periodoAtual = 0;
  cursosUdemy: any[] = [];

  @ViewChild('cursosCarousel') cursosCarousel!: ElementRef<HTMLDivElement>;

  constructor(private cursos: Cursos) {}

  ngOnInit(): void {
    this.calcularPeriodoAtual();
    this.cursosUdemy = this.cursos.getCursosUdemy(); 
  }

  calcularPeriodoAtual(): void {
    const inicio = new Date(2023, 3);
    const hoje = new Date();
    const mesesCursados = (hoje.getFullYear() - inicio.getFullYear()) * 12 + hoje.getMonth() - inicio.getMonth();
    this.periodoAtual = Math.floor(mesesCursados / 6) + 1;
  }

  scrollLeft(): void {
    this.cursosCarousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight(): void {
    this.cursosCarousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
