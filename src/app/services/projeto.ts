import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Projeto {

  constructor(){}

  projeto = [
    {
      nome:"nome",

    }
  ]

  getProjeto() {
    return this.projeto;
  }

}
