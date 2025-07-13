// src/app/services/projetos.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {
  constructor() {}

  
  private projetos = [
    {
      nome: "Chatbot com Inteligência Artificial",
      link_back: "https://github.com/seu-repo/chatbot-ai",
      linkdoVideo: "https://www.youtube.com/watch?v=8uTWnjVfj9Q",
      texto: "Chatbot com IA usando Spring Boot e API do Google Gemini.",
      textoDetalhado: "Chatbot desenvolvido em Java com Spring Boot, que permite conversas dinâmicas com personagens da cultura pop usando a API Google Gemini para respostas inteligentes. O backend utiliza banco de dados relacional para armazenar informações e contexto das interações. A interface web é construída com HTML, CSS e JavaScript, focando em usabilidade e responsividade. Tecnologias: Java, Spring Boot, Google Gemini, banco de dados relacional, HTML/CSS/JS.",
      tecnologia: "https://skillicons.dev/icons?i=java,spring,postgres,mysql,angular",
      imagem: "https://i.pinimg.com/736x/b9/7f/2d/b97f2db55c3af4343b5bf512143e0492.jpg"
    },
    {
      nome: "ChatBot com IA",
      link_back: "https://github.com/seunome/chatbot-ia",
      linkdoVideo: "https://www.youtube.com/watch?v=8uTWnjVfj9Q",
      texto: "Chatbot feito com Spring Boot e API Gemini do Google.",
      textoDetalhado: "Uma aplicação mais enxuta, mas poderosa. Consome a API do Google Gemini para oferecer respostas personalizadas. Frontend com Angular e backend com Spring Boot.",
      tecnologia: "https://skillicons.dev/icons?i=java,spring,angular",
      imagem: "assets/img/chatbot.jpg"
    }
  ];
  

  getProjetos() {
    return this.projetos;
  }
}
