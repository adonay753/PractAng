import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoViajesComponent } from './destino-viajes.component';

describe('DestinoViajesComponent', () => {
  let component: DestinoViajesComponent;
  let fixture: ComponentFixture<DestinoViajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinoViajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinoViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
