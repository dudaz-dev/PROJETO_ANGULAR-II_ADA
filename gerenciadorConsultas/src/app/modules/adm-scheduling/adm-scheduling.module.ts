import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component'; 
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { AdmSchedulingComponent } from './adm-scheduling.component'

@NgModule({
  declarations: [
    // HeaderComponent,
    // FooterComponent,
    // MainComponent,
    // AdmSchedulingComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    // AdmSchedulingComponent,
  ],
})
export class AdmSchedulingModule {}