import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { UserSchedulingComponent } from './user-scheduling.component';

@NgModule({
  declarations: [
    
    // HeaderComponent,
    // FooterComponent,
    // MainComponent,
    // UserSchedulingComponent,

  ],
  imports: [
    CommonModule,
  ],
  exports: [
    // UserSchedulingComponent,
  ],
})
export class UserSchedulingModule {}