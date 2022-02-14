import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

const routerOptions: ExtraOptions = {
scrollPositionRestoration: 'enabled',
anchorScrolling: 'enabled',
scrollOffset: [0, 64],
};

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
