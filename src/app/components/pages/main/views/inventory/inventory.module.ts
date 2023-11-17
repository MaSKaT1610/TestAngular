import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryRoutingModule } from './inventory-routing.module';



@NgModule({
  declarations: [
    InventoryComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
