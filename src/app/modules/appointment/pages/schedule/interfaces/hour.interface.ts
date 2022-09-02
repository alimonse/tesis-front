import {DayInterface} from './day.interface';

export interface HourInterface {
  desde?: string;
  hasta?: string;
  horarioDia?: number | DayInterface;
  habilitado?: 0 | 1;
  id?: number;
  fechaCreacion?: Date;
  fechaActualizacion?: Date;
}
