import { DayInterface } from './day.interface';
import { HourInterface } from './hour.interface';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export interface ScheduleInterface extends DayInterface, HourInterface {
  id?: number;
  idDia?: number;
  idPrestacion?: number;
}
