import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApieComponent } from './puslapiai/apie/apie.component';
import { PagrindinisComponent } from './puslapiai/pagrindinis/pagrindinis.component';

const routes: Routes = [
  {path : "", component : PagrindinisComponent},
  {path : "apie", component : ApieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
