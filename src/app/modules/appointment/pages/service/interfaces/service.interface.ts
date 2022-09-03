import { DayInterface } from '../../schedule/interfaces/day.interface';

export interface ServiceInterface {
  nombreServicio?: string;
  descripcion?: string;
  tiempoAproximado?: string;
  tiempoEspera?: string;
  id?: number;
  fechaCreacion?: Date;
  fechaActualizacion?: Date;
  habilitado?: 0 | 1;
  oficina?: number;
  colaborador?: number;
  horarioDias?: DayInterface[];
}
