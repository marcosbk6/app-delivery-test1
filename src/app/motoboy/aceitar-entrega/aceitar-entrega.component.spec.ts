import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceitarEntregaComponent } from './aceitar-entrega.component';

describe('AceitarEntregaComponent', () => {
  let component: AceitarEntregaComponent;
  let fixture: ComponentFixture<AceitarEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AceitarEntregaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AceitarEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
