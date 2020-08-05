import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DestinoViajesComponent } from './destino-viajes/destino-viajes.component';
import {ListaDestinosComponent} from './lista-destinos/lista-destinos.component';

@NgModule({
    declarations: [
        AppComponent,
        DestinoViajesComponent,
        ListaDestinosComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
