import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
   //{ path: '', redirectTo: '/inicio', pathMatch: 'full' },

];
// tslint:disable-next-line: variable-name
export const APP_ROUTING = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FeatureRoutingModule {}
