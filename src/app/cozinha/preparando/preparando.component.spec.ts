import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparandoComponent } from './preparando.component';

describe('PreparandoComponent', () => {
  let component: PreparandoComponent;
  let fixture: ComponentFixture<PreparandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreparandoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreparandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
