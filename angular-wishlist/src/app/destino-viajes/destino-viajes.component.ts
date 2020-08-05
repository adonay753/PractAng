import {Component, OnInit, Input, HostBinding} from '@angular/core';
import {DestinoViaje} from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viajes',
  templateUrl: './destino-viajes.component.html',
  styleUrls: ['./destino-viajes.component.css']
})
export class DestinoViajesComponent implements OnInit {
  @Input() destino: DestinoViaje;
  @HostBinding('attr.class') cssClass = 'class="col-md-4"';
  constructor() {}

  ngOnInit(): void {
  }

}
