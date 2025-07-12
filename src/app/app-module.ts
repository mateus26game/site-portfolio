import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './component/navbar/navbar';
import { FaleComigoComponent } from './component/fale-comigo/fale-comigo';
import { FormsModule } from '@angular/forms';
import { Experiencia } from './component/experiencia/experiencia';
import { Footer } from './component/footer/footer';
import { FormacaoComponent } from './component/formacao/formacao';


@NgModule({
  declarations: [
    App,
    Navbar,
    FaleComigoComponent,
    Experiencia,
    Footer,
    FormacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
