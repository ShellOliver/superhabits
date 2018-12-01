import {Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Habit {
  @PrimaryGeneratedColumn()
  id: number;
}
