import { StorageService } from './services/storage.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificationPipe } from './pipes/calification.pipe';



@NgModule({
  declarations: [CalificationPipe],
  providers: [
    StorageService
  ],
  imports: [
    CommonModule
  ],
  exports: [CalificationPipe]
})
export class SharedModule { }
