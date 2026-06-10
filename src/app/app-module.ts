import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { App } from './app';
import { UsuariosComponent } from './consumoAPI/components/usuarios.component';

@NgModule({
declarations: [
  App
],
imports: [
  BrowserModule,
  HttpClientModule,
  UsuariosComponent
],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }