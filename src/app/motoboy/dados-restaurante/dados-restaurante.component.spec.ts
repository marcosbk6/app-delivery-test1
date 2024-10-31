import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosRestauranteComponent } from './dados-restaurante.component';

describe('DadosRestauranteComponent', () => {
  let component: DadosRestauranteComponent;
  let fixture: ComponentFixture<DadosRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosRestauranteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
