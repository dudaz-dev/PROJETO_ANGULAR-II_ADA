import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacaoADMComponent } from './aplicacao-adm.component';

describe('AplicacaoADMComponent', () => {
  let component: AplicacaoADMComponent;
  let fixture: ComponentFixture<AplicacaoADMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AplicacaoADMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AplicacaoADMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
