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
      link_back: "https://github.com/seu-repo/chatbot-ai", // ajuste o link real
      linkdoVideo: "https://www.youtube.com/watch?v=8uTWnjVfj9Q",
      texto: "Projeto de chatbot utilizando Java com Spring Boot e arquitetura MVC. A aplicação consome a API do Google Gemini para criar um site que simula um personagem fictício respondendo de forma inteligente.",
      tecnologia: "https://skillicons.dev/icons?i=java,spring,postgres,mysql,angular",
      imagem: "https://i.pinimg.com/736x/b9/7f/2d/b97f2db55c3af4343b5bf512143e0492.jpg" // pode trocar por sua imagem real
   
    },
    {
      nome: "ChatBot com IA",
    link_back: "https://github.com/seunome/chatbot-ia",
    linkdoVideo: "https://www.youtube.com/watch?v=8uTWnjVfj9Q",
    texto: "Chatbot feito com Spring Boot e API Gemini do Google.",
    imagem: "assets/img/chatbot.jpg",
    tecnologia: "https://skillicons.dev/icons?i=java,spring,angular"
    }
  ];

  getProjetos() {
    return this.projetos;
  }
}
