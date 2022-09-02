import { ServiceInterface } from '../modules/appointment/pages/service/interfaces/service.interface';

export interface ColaboradorInterface {
  fechaCreacion?: Date;
  fechaActualizacion?: Date;
  id?: number;
  nombreColaborador?: string;
  correo?: string;
  habilitado?: number;
  prestaciones?: ServiceInterface[] | number;
}
