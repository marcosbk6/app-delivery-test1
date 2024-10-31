import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoEntregueComponent } from './pedido-entregue.component';

describe('PedidoEntregueComponent', () => {
  let component: PedidoEntregueComponent;
  let fixture: ComponentFixture<PedidoEntregueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidoEntregueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoEntregueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
