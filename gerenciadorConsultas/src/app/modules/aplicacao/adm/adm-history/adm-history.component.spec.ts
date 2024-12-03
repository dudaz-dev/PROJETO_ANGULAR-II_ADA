import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmHistoryComponent } from './adm-history.component';

describe('AdmHistoryComponent', () => {
  let component: AdmHistoryComponent;
  let fixture: ComponentFixture<AdmHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
