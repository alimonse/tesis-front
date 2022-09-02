import { ColaboradorInterface } from '../../../../../interfaces/colaborador.interface';

export interface DayInterface {
  dia?: string;
  colaborador?: number | ColaboradorInterface;
  habilitado?: 0 | 1;
  id?: number;
  fechaCreacion?: Date;
  fechaActualizacion?: Date;
}
