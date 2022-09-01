import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  options = [
    {
      name: 'gestión empresas',
      pathImg: 'assets/images/enterprise_management.svg',
      route: 'enterprise',
    },
    {
      name: 'gestión servicios',
      pathImg: 'assets/images/services_management.svg',
      route: 'services',
    },
    {
      name: 'gestión horarios',
      pathImg: 'assets/images/schedule_management.svg',
      route: 'schedule',
    },
  ];

  constructor(private readonly _router: Router) {}

  goToOption(uri: string) {
    const routeInit = '/appointment';
    this._router.navigate([routeInit, uri]);
  }
}
