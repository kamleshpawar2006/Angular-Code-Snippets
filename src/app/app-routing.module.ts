import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableExpandCollapseMultipleRowComponent } from './components/table-expand-collapse-multiple-row/table-expand-collapse-multiple-row.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'table-expand-collapse-multiple-row', component: TableExpandCollapseMultipleRowComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
