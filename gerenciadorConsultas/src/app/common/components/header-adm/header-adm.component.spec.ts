import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderADMComponent } from './header-adm.component';

describe('HeaderADMComponent', () => {
  let component: HeaderADMComponent;
  let fixture: ComponentFixture<HeaderADMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderADMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderADMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
