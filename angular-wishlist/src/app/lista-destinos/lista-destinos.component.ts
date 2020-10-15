import {Component, OnInit} from '@angular/core';
import {DestinoViaje} from '../models/destino-viaje.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl:  './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos: DestinoViaje[];

  constructor() {
    this.destinos = [];
  }

  ngOnInit(): void {
  }

  agregado(d: DestinoViaje): boolean {
    this.destinos.add(d);
    this.onItemAdded.emit(d);
  }

  elegido(e: DestinoViaje) {
    // tslint:disable-next-line:only-arrow-functions
    this.destinos.forEach(function(x) {x.setSelected(false); });
    e.setSelected(true);
  }
}

