import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-formacao',
  standalone: false,
  templateUrl: './formacao.html',
  styleUrls: ['./formacao.css']
})
export class FormacaoComponent implements OnInit {

  periodoAtual: number = 0;

  @ViewChild('cursosCarousel') cursosCarousel!: ElementRef<HTMLDivElement>;

  cursosUdemy = [
    {
      titulo: "Git e GitHub do básico ao avançado",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQFmyQ7Q4LNKzw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734275789079?e=1752966000&v=beta&t=7HkjrfFdbuqm1kd6LLYokGifnUd8EkQL8hUHMSlmoxw",
      plataforma: "Udemy",
      link: "https://www.udemy.com/course/typescript-do-basico-ao-avancado"
    },
    {
      titulo: "Node.js com NestJS",
      imagem: "https://img-c.udemycdn.com/course/240x135/3122686_81f6.jpg",
      plataforma: "Udemy",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Node.js com NestJS",
      imagem: "https://img-c.udemycdn.com/course/240x135/3122686_81f6.jpg",
      plataforma: "Udemy",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    }
  ];

  ngOnInit(): void {
    this.calcularPeriodoAtual();
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
