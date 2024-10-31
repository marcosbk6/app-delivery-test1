import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepararComponent } from './preparar.component';

describe('PrepararComponent', () => {
  let component: PrepararComponent;
  let fixture: ComponentFixture<PrepararComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrepararComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrepararComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
