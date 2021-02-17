import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptedComponent } from './accepted/accepted.component';
import { AppComponent } from './app.component';
import { PendingComponent } from './pending/pending.component';
import { RejectedComponent } from './rejected/rejected.component';
import { TransistComponent } from './transist/transist.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'pending',
    component: PendingComponent,
  },
  {
    path: 'rejected',
    component: RejectedComponent,
  },
  {
    path: 'accepted',
    component: AcceptedComponent,
  },
  {
    path: 'transist',
    component: TransistComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
