import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Habit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  name: string;
}
