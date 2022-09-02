import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceComponent,
    data: {
      breadcrumb: 'Gestión servicios',
    },
  },
  {
    path: ':id/schedule',
    loadChildren: () =>
      import('../schedule/schedule.module').then((mod) => mod.ScheduleModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceRoutingModule {}
