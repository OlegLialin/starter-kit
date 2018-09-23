import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { FfTestComponent } from './ff-test.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'ff-test', component: FfTestComponent, data: { title: extract('Ff-test') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FfTestRoutingModule { }
