import { ServiceInterface } from '../../service/interfaces/service.interface';

export interface DayInterface {
  dia?: string;
  prestacion?: number | ServiceInterface;
  habilitado?: 0 | 1;
  id?: number;
  fechaCreacion?: Date;
  fechaActualizacion?: Date;
}
