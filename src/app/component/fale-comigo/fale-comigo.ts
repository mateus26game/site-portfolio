import { Component, AfterViewInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-fale-comigo',
  templateUrl: './fale-comigo.html',
  styleUrls: ['./fale-comigo.css'],
  standalone:false
})
export class FaleComigoComponent implements AfterViewInit {

  nome: string = '';
  assunto: string = '';
  mensagem: string = '';

  
  ngAfterViewInit(): void {
    particlesJS("particles-contact", {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.4 },
        size: { value: 3, random: true },
        move: { enable: true, speed: 2 }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          repulse: { distance: 100 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }

  enviarMensagem() {
    const texto = `Nome: ${this.nome} %0AMensagem: ${this.mensagem}`;
    const numero = '5581996836797'; // Exemplo: 5599999999999
    window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
  }
}
