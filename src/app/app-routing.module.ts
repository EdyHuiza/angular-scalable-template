import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './modules/home.module#HomeModule'
  },
  {
    path: '**',
    redirectTo: 'home/test'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
