import {Component, OnInit, Input, HostBinding, EventEmitter, Output} from '@angular/core';
import {DestinoViaje} from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viajes',
  templateUrl: './destino-viajes.component.html',
  styleUrls: ['./destino-viajes.component.css']
})
export class DestinoViajesComponent implements OnInit {
  @Input() destino: DestinoViaje;
  @Input() position: number;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() clicked: EventEmitter<DestinoViaje>;

  constructor() {
    this.clicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  ir() {
    this.clicked.emit(this.destino);
    return false;
  }
}
