import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRegistrationComponent } from './medical-registration.component';

describe('MedicalRegistrationComponent', () => {
  let component: MedicalRegistrationComponent;
  let fixture: ComponentFixture<MedicalRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
