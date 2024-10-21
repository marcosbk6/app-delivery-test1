import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizacaoComponent } from './finalizacao.component';

describe('FinalizacaoComponent', () => {
  let component: FinalizacaoComponent;
  let fixture: ComponentFixture<FinalizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalizacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
