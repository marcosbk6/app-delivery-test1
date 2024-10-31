import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificandoMotoComponent } from './notificando-moto.component';

describe('NotificandoMotoComponent', () => {
  let component: NotificandoMotoComponent;
  let fixture: ComponentFixture<NotificandoMotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificandoMotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificandoMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
