import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicationComponent } from './aplicacao.component';

describe('AplicationComponent', () => {
  let component: AplicationComponent;
  let fixture: ComponentFixture<AplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
